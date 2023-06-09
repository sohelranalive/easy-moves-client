import useAdmin from "../../../hooks/useAdmin";
import SingleUserData from "./SingleUserData";

const ManageUsers = () => {
    const [adminStats] = useAdmin()
    console.log(adminStats);

    return (
        <div className="w-9/12 mx-auto">
            <h1>Total Number of Users: {adminStats?.userResult.length}</h1>
            <div>

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
                                adminStats?.userResult.map(singleUser => <SingleUserData
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