import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useInstructor from "../../../hooks/useInstructor";

const image_hosting_server_url_key = import.meta.env.VITE_IMAGE_HOSTING_SERVER_API
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_server_url_key}`

const AddClass = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const [instructorStats, , refetch] = useInstructor()
    console.log(instructorStats);

    const onSubmit = data => {

        console.log(data);
        const formData = new FormData()
        formData.append('image', data.classPhoto[0])

        let classPhotoURL = ''

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData) {
                    console.log(imageData);
                    classPhotoURL = imageData.data.display_url;
                }
                const classInfo = {
                    className: data.className,
                    classPhoto: classPhotoURL,
                    instructorName: user?.displayName,
                    instructorEmail: user?.email,
                    availableSeats: parseFloat(data.seats),
                    price: parseFloat(data.price),
                    status: 'pending',
                    totalEnrolled: (0),
                    totalSeats: parseFloat(data.seats)
                }

                axiosSecure.post('/instructor/addClass', classInfo)
                    .then(classData => {
                        if (classData.data.insertedId) {
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'Class added successful',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            reset()
                            refetch()
                        }
                    })
            })
    }

    return (
        <div>
            <div className="border-2 border-[#AB1318] px-14 py-8 rounded-xl shadow-inner bg-slate-300">
                <h1 className="underline text-3xl text-center py-2">Add a new Class</h1>

                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* Instructor Name and Email */}
                    <div className="flex w-full">
                        <div className="form-control mt-4 w-1/2">
                            <label className="label">
                                <span className="label-text">Instructor Name</span>
                            </label>
                            <input
                                type="text"
                                defaultValue={user?.displayName}
                                readOnly
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control mt-4 w-1/2 ps-4">
                            <label className="label">
                                <span className="label-text">Instructor Email</span>
                            </label>
                            <input
                                type="email"
                                defaultValue={user?.email}
                                readOnly
                                className="input input-bordered"
                            />
                        </div>
                    </div>

                    {/* Class Name and Photo */}
                    <div className="flex w-full">
                        <div className="form-control mt-4 w-1/2">
                            <label className="label">
                                <span className="label-text">Class Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Class Name"
                                className="input input-bordered"
                                {...register("className", { required: true })}
                            />
                            {errors.className && <span className="text-red-500 font-bold">Class Name is required</span>}
                        </div>
                        <div className="form-control mt-4 w-1/2 ps-4">
                            <label className="label">
                                <span className="label-text">Class Photo</span>
                            </label>
                            <input
                                {...register("classPhoto", { required: true })}
                                type="file"
                                className="file-input file-input-bordered"
                            />
                            {errors.classPhoto && <span className="text-red-500 font-bold">Photo is required</span>}
                        </div>
                    </div>

                    {/* Available seats & price */}
                    <div className="flex w-full">
                        <div className="form-control mt-4 w-1/2">
                            <label className="label">
                                <span className="label-text">Total Seats</span>
                            </label>
                            <input
                                {...register("seats", { required: true, })}
                                type='number'
                                placeholder="Total Seats"
                                className="input input-bordered"
                            />
                            {errors.seats && <span className="text-red-500 font-bold">Number of Seat is required</span>}
                        </div>
                        <div className="form-control mt-4 w-1/2 ps-4">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                {...register("price", { required: true })}
                                type='number'
                                placeholder="$ Price"
                                className="input input-bordered"
                            />
                            {errors.price && <span className="text-red-500 font-bold">Price is required</span>}
                        </div>
                    </div>

                    {/* Login button */}
                    <div className="form-control mt-8">
                        <input
                            type="submit"
                            className="bg-slate-900 py-2 uppercase font-semibold rounded-md text-white cursor-pointer"
                            value="Add Class"
                        />
                    </div>

                </form>

            </div>
        </div>
    );
};

export default AddClass;