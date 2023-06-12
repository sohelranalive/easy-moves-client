import { Link } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";

const AdminHome = () => {

    const [adminStats] = useAdmin()
    // const { classResult } = adminStats
    console.log(adminStats);

    const totalRegisteredStudents = adminStats?.userResult?.filter(item => item.role != 'admin' && 'instructor')
    const totalRegisteredInstructor = adminStats?.userResult?.filter(item => item.role == 'admin' && 'user')
    const totalApprovedClass = adminStats?.classResult?.filter(item => item.status == 'approved')
    const totalPendingClass = adminStats?.classResult?.filter(item => item.status == 'pending')
    const totalDeniedClass = adminStats?.classResult?.filter(item => item.status == 'denied')

    return (
        <div className="w-10/12 mx-auto">
            <h1 className="text-3xl text-center underline">Welcome to Dashboard</h1>
            <br />
            <div className="flex justify-between mt-8 text-white">
                <Link to='/dashboard/manage-user'>
                    <div className="bg-purple-400 rounded-lg p-8 h-full">
                        <h2 className="text-2xl">Total Registered Students</h2>
                        <h1 className="text-5xl">{totalRegisteredStudents?.length}</h1>
                    </div>
                </Link>
                <Link to='/dashboard/manage-user'>
                    <div className="bg-purple-400 rounded-lg p-8 h-full">
                        <h2 className="text-2xl">Total Registered Instructors</h2>
                        <h1 className="text-5xl">{totalRegisteredInstructor?.length}</h1>
                    </div>
                </Link>
            </div>
            <div className="flex justify-between mt-8 text-white">
                <Link to='/dashboard/user-enrolled-class'>
                    <div className="bg-lime-400 rounded-lg p-8 h-full">
                        <h2 className="text-2xl">Total Approved Class</h2>
                        <h1 className="text-5xl">{totalApprovedClass?.length}</h1>
                    </div>
                </Link>
                <Link to='/dashboard/manage-class'>
                    <div className="bg-orange-400 rounded-lg p-8 h-full">
                        <h2 className="text-2xl">Total Pending Class</h2>
                        <h1 className="text-5xl">{totalPendingClass?.length}</h1>
                    </div>
                </Link>
                <Link to='/dashboard/payment-history'>
                    <div className="bg-amber-400 rounded-lg p-8 h-full">
                        <h2 className="text-2xl">Total Denied Class</h2>
                        <h1 className="text-5xl">{totalDeniedClass?.length}</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default AdminHome;