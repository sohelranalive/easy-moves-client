import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useInstructor from "../hooks/useInstructor";
import LoaderSpinner from "../components/LoaderSpinner/LoaderSpinner";

const InstructorRoute = ({ children }) => {

    const { user, loading } = useAuth()
    const [instructorStats, isInstructorLoading] = useInstructor()

    if (loading || isInstructorLoading) {
        // return <progress className="progress w-56"></progress>
        return <LoaderSpinner></LoaderSpinner>
    }

    if (user && instructorStats) {
        return children;
    }

    return <Navigate to='/'></Navigate>;
};

export default InstructorRoute;