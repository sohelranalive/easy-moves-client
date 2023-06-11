import Container from "../../../components/Container/Container";
import logo from '../../../assets/easy-moves.png'
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';
import useAuth from "../../../hooks/useAuth";
import { Tooltip } from "react-tooltip";
import { ToastContainer } from 'react-toastify';

const Heading = () => {

    const { user, userLogOut } = useAuth()

    const handleLogOut = () => {
        userLogOut()
            .then(() => { })
            .catch(error => console.log(error.message))
    }

    const menuItems = <>
        <li><NavLink to='/' className={({ isActive }) => (isActive ? 'b-active' : 'b-default')}>Home</NavLink></li>
        <li><NavLink to='/instructors' className={({ isActive }) => (isActive ? 'b-active' : 'b-default')}>Instructors</NavLink></li>
        <li><NavLink to='/classes' className={({ isActive }) => (isActive ? 'b-active' : 'b-default')}>Classes</NavLink></li>
        <li><NavLink to='/dashboard' className={({ isActive }) => (isActive ? 'b-active' : 'b-default')}>Dashboard</NavLink></li>
        <li>
            {user
                ?
                <div className='flex items-center space-x-4'>
                    <button
                        onClick={handleLogOut}
                        className=" bg-[#AB1318] py-2 px-3 rounded-lg text-white"
                    >LogOut</button>
                    <div className='h-12 w-12 rounded-full border-2 border-[#AB1318] hidden md:block'>
                        <img
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content={`Hello, ${user?.displayName}`}
                            src={user?.photoURL} alt="" className='h-full w-full rounded-full'
                        />
                        {
                            <Tooltip id="my-tooltip" />
                        }
                    </div>
                </div>

                : <div>
                    <NavLink to='/login' className=" bg-[#AB1318] py-2 px-3 rounded-lg text-white">Login</NavLink>
                </div>
            }
        </li>
    </>

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="py-2 border-b-2 shadow-sm relative">
            <Container>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={logo} alt="logo" height={70} width={70} />
                        <h1 className="ms-4 text-4xl font-bold">Easy<span className="text-[#AB1318]">Moves</span></h1>
                    </div>
                    <div>
                        <ul className="hidden md:inline-flex items-center space-x-4 font-bold">
                            {menuItems}
                        </ul>
                    </div>
                    <div className="md:hidden text-3xl flex items-center">
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            {
                                menuOpen ? <RxCross1 /> : <GiHamburgerMenu />
                            }
                        </button>
                    </div>
                </div>
                {/* dropdown menu */}
                <div>
                    <ul onClick={() => setMenuOpen(!menuOpen)} className={`bg-white py-4 px-4 rounded-md flex flex-col space-y-4 text-right absolute right-4 top-16 md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
                        {menuItems}
                    </ul>
                </div>
                <ToastContainer />
            </Container>
        </div>
    );
};

export default Heading;