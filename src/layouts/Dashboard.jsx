import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import { useState } from "react";

const Dashboard = () => {

    const { user, userLogOut } = useAuth()
    const navigate = useNavigate()
    const [level, setLevel] = useState('')

    useEffect(() => {
        if (!user) {
            return
        }
        fetch(`https://b7a12-summer-camp-server-side-sohelranalive.vercel.app/user/level?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setLevel(data.level)
            })
    }, [user])

    const handleLogOut = () => {
        userLogOut()
            .then(() => {
                navigate('/')
            })
            .catch(error => console.log(error.message))
    }

    useEffect(() => {
        if (level == 'user') {
            return navigate('/dashboard/user-home')
        }
        if (level == 'admin') {
            return navigate('/dashboard/admin-home')
        }
        if (level == 'instructor') {
            return navigate('/dashboard/instructor-home')
        }
    }, [level, navigate]);


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
                        {/* Dashboard menu for user */}
                        {level == 'user' &&
                            <>
                                <div>
                                    <NavLink to='/dashboard/user-home' className={({ isActive }) => (isActive ? 'd-active' : 'd-default')}>User Home</NavLink>
                                </div>
                                <div>
                                    <NavLink to='/dashboard/user-selected-class' className={({ isActive }) => (isActive ? 'd-active' : 'd-default')}>Selected Classes</NavLink>
                                </div>
                                <div>
                                    <NavLink to='/dashboard/user-enrolled-class' className={({ isActive }) => (isActive ? 'd-active' : 'd-default')}>Enrolled Class</NavLink>
                                </div>
                            </>
                        }
                        {/* Dashboard menu for admin */}
                        {level == 'admin' &&
                            <>
                                <div>
                                    <NavLink to='/dashboard/admin-home' className={({ isActive }) => (isActive ? 'd-active' : 'd-default')}>Admin Home</NavLink>
                                </div>
                                <div>
                                    <NavLink to='/dashboard/manage-class' className={({ isActive }) => (isActive ? 'd-active' : 'd-default')}>Manage Classes</NavLink>
                                </div>
                                <div>
                                    <NavLink to='/dashboard/manage-user' className={({ isActive }) => (isActive ? 'd-active' : 'd-default')}>Manage Users</NavLink>
                                </div>
                            </>
                        }
                        {/* Dashboard menu for Instructor */}
                        {level == 'instructor' &&
                            <>
                                <div>
                                    <NavLink to='/dashboard/instructor-home' className={({ isActive }) => (isActive ? 'd-active' : 'd-default')}>Instructor Home</NavLink>
                                </div>
                                <div>
                                    <NavLink to='/dashboard/add-class' className={({ isActive }) => (isActive ? 'd-active' : 'd-default')}>Add a Class</NavLink>
                                </div>
                                <div>
                                    <NavLink to='/dashboard/my-class' className={({ isActive }) => (isActive ? 'd-active' : 'd-default')}>My Classes</NavLink>
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
                        <Outlet></Outlet>
                    </div>
                </div>

            </div >
        </>
    );
};

export default Dashboard;