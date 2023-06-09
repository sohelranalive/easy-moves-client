import useAdmin from "../../../hooks/useAdmin";
import SingleUserData from "./SingleUserData";

const ManageUsers = () => {
    const [adminStats] = useAdmin()
    console.log(adminStats);

    return (
        <div>
            <h1>Total User: {adminStats?.length}</h1>
            <div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class Image</th>
                                <th>Class Name</th>
                                <th>Instructor Info</th>
                                <th>Available Seats</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row will show here from SingleUserData Component */}
                            {
                                adminStats?.map(singleUser => <SingleUserData
                                    key={singleUser._id} singleUser={singleUser}>
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