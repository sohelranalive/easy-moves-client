import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoaderSpinner from "../components/LoaderSpinner/LoaderSpinner";


const PrivateRoute = ({ children }) => {

    const { loading, user } = useAuth()
    const location = useLocation()

    if (loading) {
        // return <progress className="progress w-56"></progress>
        return <LoaderSpinner></LoaderSpinner>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;