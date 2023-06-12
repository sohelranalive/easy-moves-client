import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";
import LoaderSpinner from "../components/LoaderSpinner/LoaderSpinner";

const UserRoute = ({ children }) => {

    const { user, loading } = useAuth()
    const [userStats, isUserLoading] = useUser()

    if (loading || isUserLoading) {
        // return <progress className="progress w-56"></progress>
        return <LoaderSpinner></LoaderSpinner>
    }

    if (user && userStats) {
        return children;
    }

    return <Navigate to='/'></Navigate>;
};

export default UserRoute;