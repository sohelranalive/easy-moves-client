import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {

    const { user, loading } = useAuth()
    const [adminStats, isAdminLoading] = useAdmin()

    console.log('Is admin loading 10', isAdminLoading);

    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && adminStats) {
        return children;
    }

    return <Navigate to='/'></Navigate>;
};

export default AdminRoute;