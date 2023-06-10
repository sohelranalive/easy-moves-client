import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
// import useLevel from "../../hooks/useLevel";
import { useLocation, useNavigate } from "react-router-dom";

const SingleClassCard = ({ singleClass }) => {

    const { user } = useAuth()
    // const [userLevel] = useLevel()
    const location = useLocation()
    const navigate = useNavigate()

    // console.log('User level check', userLevel);

    // console.log('Hello from singlecard', user, loading);

    if (user) {
        console.log('Hello');
    }

    const handleAddClass = (_id) => {
        console.log(_id);
        console.log(location);
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

        console.log('Hello');

    }


    const { _id, classPhoto, className, instructorName, availableSeats, price } = singleClass
    return (
        <div className={`card h-full shadow-2xl ${availableSeats <= 0 ? 'bg-[#9A0E0E] text-white' : 'bg-base-100'}`}>
            <figure><img src={classPhoto} alt="Class Image" className="h-60 w-full" /></figure>
            <div className="card-body">
                <h2 className="card-title">{className}</h2>
                <p>Instructor: {instructorName}</p>
                <p>Set Remaining: {availableSeats}</p>
                <p>Class Fees: {price}</p>
                <div className="card-actions justify-end">
                    <button disabled={availableSeats <= 0} onClick={() => handleAddClass(_id)} className="btn btn-primary">Take Class</button>
                </div>
            </div>
        </div >
    );
};

export default SingleClassCard;