import { Link } from "react-router-dom";
import useUser from "../../../hooks/useUser";
import SingleClassRow from "./SingleClassRow";

const UserSelectedClass = () => {

    const [userStats, , refetch] = useUser()
    const payableAmount = userStats.selectedClassResult.reduce((sum, item) => item.price + sum, 0)

    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-3xl text-center underline">Your All Selected Classes</h1>
            <br />
            <div>
                {/* Information summary */}
                <div className="text-end">
                    <Link to='/dashboard/payment'>
                        <button className="btn btn-primary btn-sm">Proceed to Pay</button>
                    </Link>
                </div>

                <br /><br />
                {/* Table will show below */}
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class Image</th>
                                <th>Class Name</th>
                                <th className='text-center'>Instructor</th>
                                <th className="text-center">Price</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row will show here from every selected class Component */}
                            {
                                userStats.selectedClassResult.map((singleClass, index) => <SingleClassRow
                                    key={singleClass._id}
                                    singleClass={singleClass}
                                    refetch={refetch}
                                    index={index}>
                                </SingleClassRow>)
                            }
                        </tbody>
                    </table>
                    <hr className="border-2 border-green-600" />
                    <div className="flex justify-between items-center text-2xl mb-12">
                        <h1>Total Number of Class: {userStats.length}</h1>
                        <h1 className="mr-48">Total Amount: $ {payableAmount.toFixed(2)}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserSelectedClass;