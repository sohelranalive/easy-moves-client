import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useLevel from "../hooks/useLevel";

const UserRoute = ({ children }) => {

    const { user, loading } = useAuth()
    const [userLevel, isLoading] = useLevel()

    if (loading || isLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && userLevel?.level == 'user') {
        return children;
    }

    return <Navigate to='/'></Navigate>;
};

export default UserRoute;