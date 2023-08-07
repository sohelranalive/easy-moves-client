import { Link } from "react-router-dom";
import useInstructor from "../../../hooks/useInstructor";

const InstructorHome = () => {

    const [instructorStats] = useInstructor()

    // console.log(instructorStats);

    const totalClassAdded = instructorStats.length
    // console.log(totalClassAdded);
    const totalApprovedClass = instructorStats?.filter(item => item.status == 'approved')
    // console.log('approved', totalApprovedClass);
    const totalPendingClass = instructorStats?.filter(item => item.status == 'pending')
    const totalDeniedClass = instructorStats?.filter(item => item.status == 'denied')


    return (
        <div className="w-10/12 mx-auto">
            <h1 className="text-3xl text-center underline">Welcome to Dashboard</h1>
            <br />
            <div className="grid md:grid-cols-3 grid-cols-1 mt-8 gap-4 text-white">
                <Link to='/dashboard/my-class'>
                    <div className="bg-lime-400 rounded-lg p-8 h-full">
                        <h2 className="text-2xl">Total Added Class</h2>
                        <h1 className="text-5xl">{totalClassAdded}</h1>
                    </div>
                </Link>
                <Link to='/dashboard/my-class'>
                    <div className="bg-purple-400 rounded-lg p-8 h-full">
                        <h2 className="text-2xl">Total Approved Class</h2>
                        <h1 className="text-5xl">$ {totalApprovedClass?.length}</h1>
                    </div>
                </Link>

                <Link to='/dashboard/my-class'>
                    <div className="bg-orange-400 rounded-lg p-8 h-full">
                        <h2 className="text-2xl">Total Pending Class</h2>
                        <h1 className="text-5xl">{totalPendingClass?.length}</h1>
                    </div>
                </Link>
                <Link to='/dashboard/my-class'>
                    <div className="bg-amber-400 rounded-lg p-8 h-full">
                        <h2 className="text-2xl">Total Denied Class</h2>
                        <h1 className="text-5xl">$ {totalDeniedClass?.length}</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default InstructorHome;