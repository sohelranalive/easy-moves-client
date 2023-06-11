import { FaTrashAlt } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

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
            <td className="space-x-4 text-center">
                <button onClick={handleDeleteClass} className="btn btn-circle text-white hover:bg-red-600 hover:scale-110 bg-red-800 border-red-600 "><FaTrashAlt className="h-6 w-6" /></button>
            </td>
        </tr >
    );
};

export default SingleClassRow;