import Swal from "sweetalert2";
import useAdmin from "../../../hooks/useAdmin";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

//TODO: Fetch data from class and instructor, then filter out pending, approval, denied.

const SingleUserData = ({ singleUser }) => {

    const [axiosSecure] = useAxiosSecure()
    const [, , refetch] = useAdmin()

    const { name, photo, role, _id } = singleUser;

    let currentStatus = ''

    if (role == 'user') {
        currentStatus = 'Student'
    }
    if (role == 'admin') {
        currentStatus = 'Admin'
    }
    if (role == 'instructor') {
        currentStatus = 'Instructor'
    }

    const handleRoleChange = (newRole) => {
        const url = `/admin/changeRole?role=${newRole}&userId=${_id}`

        Swal.fire({
            title: 'Are you sure?',
            text: "Think twice before proceed",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: `Yes, make ${newRole}`
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(url)
                    .then(data => {
                        if (data.data.modifiedCount > 0) {
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: `${name} is now an ${newRole}`,
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
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={photo} alt="User Image" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{currentStatus}</td>
            <td className="space-x-4 text-center">
                {currentStatus == 'Admin' && <>
                    <button disabled className="btn btn-primary btn-sm">Make Admin</button>
                    <button disabled className="btn btn-primary btn-sm">Make Instructor</button>
                </>
                }
                {currentStatus == 'Student' && <>
                    <button onClick={() => handleRoleChange('admin')} className="btn btn-primary btn-sm">Make Admin</button>
                    <button onClick={() => handleRoleChange('instructor')} className="btn btn-primary btn-sm">Make Instructor</button>
                </>
                }
                {currentStatus == 'Instructor' && <>
                    <button disabled className="btn btn-primary btn-sm">Make Admin</button>
                    <button disabled className="btn btn-primary btn-sm">Make Instructor</button>
                </>}
            </td>
        </tr>
    );
};

export default SingleUserData;