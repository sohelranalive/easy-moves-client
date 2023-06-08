import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import useLevel from "../hooks/useLevel";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";

const Dashboard = () => {

    const { user, userLogOut } = useAuth()
    const [userLevel] = useLevel()
    const navigate = useNavigate()
    const [dataLoading, setDataLoading] = useState(true)
    const location = useLocation()


    const handleLogOut = () => {
        userLogOut()
            .then(() => {
                navigate('/')
            })
            .catch(error => console.log(error.message))
    }

    useEffect(() => {
        if (userLevel?.level == 'user') {
            setDataLoading(false)
            navigate('/dashboard/user-home')
        }
    }, [userLevel?.level, navigate]);


    return (
        <>
            <div>
                <nav className="bg-slate-900 w-full py-4 px-8 z-20 fixed top-0">
                    <div className="flex items-center">
                        <div className="w-1/2 text-white text-start">
                            <Link to='/'><h1 className="text-4xl">EasyMoves</h1></Link>
                        </div>
                        <div className="w-1/2 text-white flex justify-end">
                            <div className='h-12 w-12 rounded-full border-2 border-[#AB1318]'>
                                <img src={user?.photoURL} alt="" className='h-full w-full rounded-full' />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="flex mt-16">

                <div className="w-2/12 bg-slate-900 fixed top-0 h-full">
                    <div className="text-white pt-24 pl-8 space-y-4 flex flex-col fixed">
                        <div>
                            <h1 className="text-xl">Hi, {user.displayName}</h1>
                        </div>
                        <div className="divider"></div>
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
                        <div className="divider"></div>
                        <div>
                            <button
                                onClick={handleLogOut}
                                className=" bg-[#AB1318] py-2 px-3 rounded-lg text-white"
                            >LogOut</button>
                        </div>

                    </div>
                </div>

                <div className="w-10/12 ms-64 pr-8">
                    <div className="pt-8">
                        {dataLoading && location.pathname == '/dashboard' && < progress className="progress w-56"></progress>}
                        <Outlet></Outlet>
                    </div>
                </div>

            </div >
        </>
    );
};

export default Dashboard;