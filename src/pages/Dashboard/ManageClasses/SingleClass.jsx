import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAdmin from "../../../hooks/useAdmin";

const SingleClass = ({ singleClass, index }) => {

    const { _id, classPhoto, className, instructorName, instructorEmail, availableSeats, status, price } = singleClass;

    const [axiosSecure] = useAxiosSecure()
    const [, refetch] = useAdmin()


    const handleClassAction = (action) => {
        const url = `/class/takeAction?action=${action}&userId=${_id}`
        Swal.fire({
            title: 'Are you sure?',
            text: "Think twice before proceed",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: `Yes, ${action}`
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(url)
                    .then(data => {
                        if (data.data.modifiedCount > 0) {
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: `${action} action done`,
                                showConfirmButton: false,
                                timer: 1500
                            })
                            refetch()
                        }
                    })
            }
        })
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="avatar">
                    <div className="w-20 h-20 rounded-md">
                        <img src={classPhoto} alt="class photo" />
                    </div>
                </div>
            </td>
            <td>{className}</td>
            <td>
                <div className="flex flex-col">
                    <div className="font-bold">Name: {instructorName}</div>
                    <div className="text-sm">Email: {instructorEmail}</div>
                </div>
            </td>
            <td className="text-center">{availableSeats}</td>
            <td className="text-center">$ {price}</td>
            <td className="text-center">{status}</td>
            <td className="flex flex-col">
                {status == 'pending' && <>
                    <button onClick={() => handleClassAction('approved')} className="btn btn-primary btn-xs mt-2">Approve</button>
                    <button onClick={() => handleClassAction('denied')} className="btn btn-primary btn-xs mt-2">Deny</button>
                    <button className="btn btn-primary btn-xs mt-2">Feedback</button>
                </>
                }
                {status == 'approved' && <>
                    <button disabled className="btn btn-primary btn-xs mt-2">Approve</button>
                    <button disabled className="btn btn-primary btn-xs mt-2">Deny</button>
                    <button className="btn btn-primary btn-xs mt-2">Feedback</button>
                </>
                }
                {status == 'denied' && <>
                    <button disabled className="btn btn-primary btn-xs mt-2">Approve</button>
                    <button disabled className="btn btn-primary btn-xs mt-2">Deny</button>
                    <button className="btn btn-primary btn-xs mt-2">Feedback</button>
                </>
                }


            </td>
        </tr>
    );
};

export default SingleClass;