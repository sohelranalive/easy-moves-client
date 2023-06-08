import { Link, NavLink, Outlet } from "react-router-dom";
import useLevel from "../hooks/useLevel";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {

    const { user } = useAuth()
    const [userLevel] = useLevel()

    // if (!isLoading) {
    //     console.log(userLevel, isLoading);
    // }


    return (
        <>
            <div>
                <nav className="bg-slate-900 w-full py-4 px-8 z-20 fixed top-0">
                    <div className="flex items-center">
                        <div className="w-1/2 text-white text-start">
                            <Link to='/'><h1 className="text-4xl">EasyMoves</h1></Link>
                        </div>
                        <div className="w-1/2 text-white text-end">
                            <h1 className="text-xl uppercase">Hello {user.displayName}</h1>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="flex mt-16">

                <div className="w-2/12 bg-slate-900 fixed top-0 h-full">
                    <div className="text-white pt-24 pl-8 space-y-4 flex flex-col fixed">
                        {userLevel?.level == 'user' &&
                            <>
                                <div>
                                    <NavLink to='/dashboard/user-home' className={({ isActive }) => (isActive ? 'd-active' : 'd-default')}>User Home</NavLink>
                                </div>
                                <div>
                                    <NavLink to='/dashboard/user-selected-class' className={({ isActive }) => (isActive ? 'd-active' : 'd-default')}>My Selected Classes</NavLink>
                                </div>
                                <div>
                                    <NavLink to='/dashboard/user-enrolled-class' className={({ isActive }) => (isActive ? 'd-active' : 'd-default')}>My Enrolled Class</NavLink>
                                </div>
                            </>
                        }
                        {userLevel?.level == 'admin' &&
                            <>
                                <div>
                                    <NavLink to='/dashboard/user-home' className={({ isActive }) => (isActive ? 'd-active' : 'd-default')}>Admin Home</NavLink>
                                </div>
                                <div>
                                    <NavLink to='/dashboard/user-selected-class' className={({ isActive }) => (isActive ? 'd-active' : 'd-default')}>Add a Class</NavLink>
                                </div>
                                <div>
                                    <NavLink to='/dashboard/user-enrolled-class' className={({ isActive }) => (isActive ? 'd-active' : 'd-default')}>My Classes</NavLink>
                                </div>
                            </>
                        }
                    </div>
                </div>

                <div className="w-10/12 ms-64 pr-8">
                    <div className="pt-8">
                        <Outlet></Outlet>
                    </div>
                </div>

            </div >
        </>
    );
};

export default Dashboard;