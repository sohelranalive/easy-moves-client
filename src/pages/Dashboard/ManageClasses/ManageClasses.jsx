import useAdmin from "../../../hooks/useAdmin";
import SingleClass from "./SingleClass";

const ManageClasses = () => {

    const [adminStats] = useAdmin()

    return (
        <div className="w-10/12 mx-auto">
            <h1 className="text-3xl text-center underline">Manage All Classes Added By Instructor</h1>
            <br />
            <div className="mt-8">

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-sm">
                                <th>#</th>
                                <th>Class Image</th>
                                <th>Class Name</th>
                                <th>Instructor Info</th>
                                <th className="text-center">Available Seats</th>
                                <th className="text-center">Price</th>
                                <th className="text-center">Current Status</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row will show here from SingleUserData Component */}
                            {
                                adminStats?.classResult?.map((singleClass, index) => <SingleClass
                                    key={singleClass._id}
                                    singleClass={singleClass}
                                    index={index}>
                                </SingleClass>)
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default ManageClasses;