import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const SingleClassCard = ({ singleClass, userLevel }) => {

    const { _id, classPhoto, className, instructorName, availableSeats, price } = singleClass;

    const { user } = useAuth()
    const navigate = useNavigate()

    const [axiosSecure] = useAxiosSecure()

    const handleAddClass = () => {
        if (!user) {
            return Swal.fire({
                title: 'Your are not an authorized user',
                text: "You need to login/register to take the class",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
        }

        const selectedClass = { classId: _id, classPhoto, className, instructorName, price, selectedBy: user?.email }

        axiosSecure.post('/user/addClass', selectedClass)
            .then(data => {
                if (data.data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: `${className} class added successfully!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                if (data.data.isExists) {
                    Swal.fire('Already Added')
                }
                if (data.data.isEnrolled) {
                    Swal.fire('You have already enrolled to this class, try a new class')
                }
            })
    }

    return (
        <div className={`card h-full shadow-2xl ${availableSeats <= 0 ? 'bg-[#9A0E0E] text-white' : 'bg-base-100'}`}>
            <figure><img src={classPhoto} alt="Class Image" className="h-60 w-full" /></figure>
            <div className="card-body">
                <h2 className="card-title">{className}</h2>
                <p className="font-bold">Instructor: {instructorName}</p>
                <p className="font-bold">Set Remaining: {availableSeats}</p>
                <p className="text-xl font-bold">Class Fees: ${price}</p>
                <div className="card-actions justify-end">
                    <button disabled={availableSeats <= 0 || userLevel == 'admin' || userLevel == 'instructor'} onClick={handleAddClass} className="px-3 rounded-lg py-3 bg-slate-900 text-white">Take Class</button>
                </div>
            </div>
        </div >
    );
};

export default SingleClassCard;