import Container from "../../../components/Container/Container";
import logo from '../../../assets/easy-moves.png'
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';
import useAuth from "../../../hooks/useAuth";
import profilePhoto from "../../../assets/defaultProfilePhoto.png"
import { Tooltip } from "react-tooltip";

const Heading = () => {

    const { user } = useAuth()

    const menuItems = <>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'b-active' : 'b-default')}>Home</NavLink>
        <NavLink to='/instructors' className={({ isActive }) => (isActive ? 'b-active' : 'b-default')}>Instructors</NavLink>
        <NavLink to='/classes' className={({ isActive }) => (isActive ? 'b-active' : 'b-default')}>Classes</NavLink>
        <NavLink to='/dashboard' className={({ isActive }) => (isActive ? 'b-active' : 'b-default')}>Dashboard</NavLink>
        <NavLink>
            {!user
                ?
                <div className='flex items-center space-x-4'>
                    <button className=" bg-[#AB1318] py-2 px-3 rounded-lg text-white">LogOut</button>
                    <div className='h-12 w-12 rounded-full border-2 border-[#AB1318] hidden md:block'>
                        <img
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Hello"
                            src={user?.photoURL || profilePhoto} alt="" className='h-full w-full rounded-full'
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
        </NavLink>
    </>

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="py-2 border-b-2 shadow-sm relative">
            <Container>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={logo} alt="logo" height={70} width={70} />
                        <h1 className="ms-4 text-4xl font-bold">Easy<span className="text-[#AB1318]">Moves</span></h1>
                    </div>
                    <div className="hidden md:inline-flex items-center space-x-4 font-bold">
                        {menuItems}
                    </div>
                    <div className="md:hidden text-3xl flex items-center">
                        <button onClick={toggleMenu}>
                            {
                                menuOpen ? <RxCross1 /> : <GiHamburgerMenu />
                            }
                        </button>
                    </div>
                </div>
                {/* dropdown menu */}
                <div className={`bg-white py-4 px-4 rounded-md flex flex-col space-y-4 text-right absolute right-4 top-16 md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
                    {menuItems}
                </div>
            </Container>
        </div>
    );
};

export default Heading;