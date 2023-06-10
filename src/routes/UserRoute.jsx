import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";

const UserRoute = ({ children }) => {

    const { user, loading } = useAuth()
    const [userStats, isUserLoading] = useUser()

    if (loading || isUserLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && userStats) {
        return children;
    }

    return <Navigate to='/'></Navigate>;
};

export default UserRoute;