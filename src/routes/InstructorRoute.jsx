import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useLevel from "../hooks/useLevel";

const InstructorRoute = ({ children }) => {

    const { user, loading } = useAuth()
    const [userLevel, isLoading] = useLevel()

    if (loading || isLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && userLevel?.level == 'instructor') {
        return children;
    }

    return <Navigate to='/'></Navigate>;
};

export default InstructorRoute;