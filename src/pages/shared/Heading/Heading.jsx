import Container from "../../../components/Container/Container";
import logo from '../../../assets/easy-moves.png'
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';

const Heading = () => {

    const menuItems = <>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'b-active' : 'b-default')}>Home</NavLink>
        <NavLink to='/instructors' className={({ isActive }) => (isActive ? 'b-active' : 'b-default')}>Instructors</NavLink>
        <NavLink to='/classes' className={({ isActive }) => (isActive ? 'b-active' : 'b-default')}>Classes</NavLink>
        <NavLink to='/dashboard' className={({ isActive }) => (isActive ? 'b-active' : 'b-default')}>Dashboard</NavLink>
        <NavLink to='/login' className={({ isActive }) => (isActive ? 'b-active' : 'b-default')}>Login</NavLink>
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
                    <div className="space-x-4 hidden md:block font-bold">
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
                <div className={`bg-white py-2 px-4 rounded-md  flex flex-col space-y-2 text-right absolute right-4 top-16 md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
                    {menuItems}
                </div>
            </Container>
        </div>
    );
};

export default Heading;