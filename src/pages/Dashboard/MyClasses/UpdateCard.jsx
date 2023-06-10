import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useInstructor from "../../../hooks/useInstructor";

const UpdateCard = ({ isOpen, setIsOpen, info }) => {

    const [axiosSecure] = useAxiosSecure()
    const [, , refetch] = useInstructor()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        if (data.className == info.className && data.price == info.price) {
            setIsOpen(!isOpen)
            return alert('Nothing changed')
        }

        const updatedClassInfo = {
            className: data.className,
            price: parseFloat(data.price)
        }

        axiosSecure.patch(`/instructor/updateClass/${info._id}`, updatedClassInfo)
            .then(updatedData => {
                if (updatedData.data.modifiedCount > 0) {
                    setIsOpen(!isOpen)
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Class Updated successful',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch()
                }
            })
    }


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
            <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-black opacity-70"></div>
            </div>
            <div className="relative bg-white rounded-lg w-4/12">
                <div className="p-4">
                    <h2 className="text-lg text-center whitespace-ellipsis overflow-hidden font-bold mb-2">Update Class Info</h2>
                    <br />
                    <div className="text-gray-700">

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Name</span>
                                </label>
                                <input
                                    {...register("className", { required: true })}
                                    type="text"
                                    name='className'
                                    defaultValue={info.className}
                                    className="input input-bordered"
                                />
                                {errors.className && <span className="text-red-500 font-bold">Class Name is required</span>}
                            </div>

                            <div className="form-control mt-2">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input
                                    {...register("price", { required: true, })}
                                    type="number"
                                    name='price'
                                    defaultValue={info.price}
                                    className="input input-bordered"
                                />
                                {errors.price && <span className="text-red-500 font-bold">Price is required</span>}
                            </div>

                            <div className=" mt-4 mb-4 space-x-2">
                                <input className="btn btn-primary" type="submit" value="Update" />
                                <button onClick={() => setIsOpen(!isOpen)} className="btn btn-warning">
                                    Close
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateCard;