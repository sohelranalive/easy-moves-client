import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import PrivateRoute from "./PrivateRouter";
import Dashboard from "../layouts/Dashboard";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import UserSelectedClass from "../pages/Dashboard/UserSelectedClass/UserSelectedClass";
import UserEnrolledClass from "../pages/Dashboard/UserEnrolledClass/UserEnrolledClass";
import UserRoute from "./UserRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'user-home',
                element: <UserRoute><UserHome></UserHome></UserRoute>
            },
            {
                path: 'user-selected-class',
                element: <UserRoute><UserSelectedClass></UserSelectedClass></UserRoute>
            },
            {
                path: 'user-enrolled-class',
                element: <UserRoute><UserEnrolledClass></UserEnrolledClass></UserRoute>
            }
        ]
    }
])

export default router;