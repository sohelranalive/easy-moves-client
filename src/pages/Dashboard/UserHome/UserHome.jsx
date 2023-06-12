import { Link } from "react-router-dom";
import useUser from "../../../hooks/useUser";

const UserHome = () => {

    const [userStats] = useUser()
    // console.log(userStats);
    const selectedClass = userStats.selectedClassResult.length;
    const enrolledClasses = userStats.enrolledClassResult.length;
    const totalPaidAmount = userStats.usersAllPayment.reduce((sum, item) => item.price + sum, 0)

    return (
        <div className="w-10/12 mx-auto">
            <h1 className="text-3xl text-center underline">Welcome to Dashboard</h1>
            <br />
            <div className="flex justify-between mt-8 text-white">
                <Link to='/dashboard/user-enrolled-class'>
                    <div className="bg-lime-400 rounded-lg p-8 h-full">
                        <h2 className="text-2xl">Total Enrolled Class</h2>
                        <h1 className="text-5xl">{enrolledClasses}</h1>
                    </div>
                </Link>
                <Link to='/dashboard/user-selected-class'>
                    <div className="bg-orange-400 rounded-lg p-8 h-full">
                        <h2 className="text-2xl">Ready to Checkout</h2>
                        <h1 className="text-5xl">{selectedClass}</h1>
                    </div>
                </Link>
                <Link to='/dashboard/payment-history'>
                    <div className="bg-purple-400 rounded-lg p-8 h-full">
                        <h2 className="text-2xl">Total Paid</h2>
                        <h1 className="text-5xl">$ {totalPaidAmount}</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default UserHome;