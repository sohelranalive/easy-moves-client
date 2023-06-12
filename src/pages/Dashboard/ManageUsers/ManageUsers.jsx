import useAdmin from "../../../hooks/useAdmin";
import SingleUserData from "./SingleUserData";

const ManageUsers = () => {
    const [adminStats] = useAdmin()

    const comparator = (a, b) => {
        const roleOrder = { admin: 0, instructor: 1, user: 2 };
        return roleOrder[a.role] - roleOrder[b.role];
    };

    const allUsers = adminStats?.userResult.sort(comparator)

    return (
        <div className="w-10/12 mx-auto">
            <h1 className="text-3xl text-center underline">Manage All User</h1>
            <br />
            <div className="mt-8">

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>User Image</th>
                                <th>User Name</th>
                                <th>Current Role</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row will show here from SingleUserData Component */}
                            {
                                allUsers.map(singleUser => <SingleUserData
                                    key={singleUser._id}
                                    singleUser={singleUser}>
                                </SingleUserData>)
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default ManageUsers;