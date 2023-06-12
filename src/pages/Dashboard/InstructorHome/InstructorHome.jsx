import { Link } from "react-router-dom";
import useInstructor from "../../../hooks/useInstructor";

const InstructorHome = () => {

    const [instructorStats] = useInstructor()

    console.log(instructorStats);

    return (
        <div className="w-10/12 mx-auto">
            <h1 className="text-3xl text-center underline">Welcome to Dashboard</h1>
            <br />
            <div className="flex justify-between mt-8 text-white">
                <Link to='/dashboard/instructor-home'>
                    <div className="bg-lime-400 rounded-lg p-8 h-full">
                        <h2 className="text-2xl">Approved Classes</h2>
                        <h1 className="text-5xl">{instructorStats.length}</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default InstructorHome;