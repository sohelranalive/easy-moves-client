import { FaTrashAlt } from 'react-icons/fa';
import { MdOutlinePayment } from 'react-icons/md';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import Payment from '../Payments/Payment';

const SingleClassRow = ({ singleClass, refetch, index }) => {

    const { _id, className, instructorName, classPhoto, price } = singleClass;
    const [axiosSecure] = useAxiosSecure()

    const handleDeleteClass = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/selectedClass/${_id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Class has been deleted.',
                                'success'
                            )
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
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={classPhoto} alt="User Image" />
                    </div>
                </div>
            </td>
            <td>{className}</td>
            <td className='text-center'>{instructorName}</td>
            <td className='text-center'>{price}</td>
            <td className="space-x-4 justify-center flex items-center">
                <button onClick={handleDeleteClass} className="btn btn-sm btn-circle text-white hover:bg-red-600 hover:scale-110 bg-red-800 border-red-600 "><FaTrashAlt className="h-4 w-4" /></button>
                <Link to={`/dashboard/payment/${_id}`} className="btn btn-sm btn-sqare text-white hover:bg-slate-700 hover:scale-110 bg-slate-900">Pay</Link>
            </td>
        </tr >
    );
};

export default SingleClassRow;