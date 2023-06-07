import Container from "../../../components/Container/Container";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../../../assets/easy-moves-red.png'

const Footer = () => {
    return (
        <div className='bg-slate-900'>
            <Container>
                <footer className="md:flex justify-between space-y-8 md:space-y-0 text-white py-8">

                    <div className="md:w-2/6 space-y-1 text-center md:text-start">
                        <img src={logo} className="h-16 w-20 mx-auto md:mx-0" alt="logo" />
                        <h4 className='text-4xl'>EasyMoves</h4>
                        <p>Arranged Events For Students</p>
                        <p>123 Sub Street</p>
                        <p>(123) 456-7890</p>
                        <p>info@easymoves.com</p>
                    </div>

                    <div className="md:w-2/6 text-center md:text-start">
                        <h4 className="text-3xl mb-2">Follow Us</h4>
                        <p className="w-full md:w-4/6">Connected with our social media sites to stay up to date.</p>
                        <ul className="mt-2 space-y-2 flex flex-col items-center md:items-start">
                            <li className="flex items-center space-x-2">
                                <FaFacebook />
                                <Link to='/' className='flex items-center'>Facebook</Link>
                            </li>
                            <li className="flex items-center space-x-2">
                                <FaInstagram />
                                <Link to='/' className=''>Instagram</Link>
                            </li>
                            <li className="flex items-center space-x-2">
                                <FaTwitter />
                                <Link to='/' className=''>Twitter</Link>
                            </li>
                            <li className="flex items-center space-x-2">
                                <FaYoutube />
                                <Link to='/' className=''>Youtube</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="md:w-2/6 text-center md:text-start">
                        <h4 className="text-3xl">Subscribe to Our Newsletter</h4>
                        <br />
                        <form>
                            <input type="email" className="py-2 hover:no-underline" />
                            <button className="bg-[#AB1318] py-2 px-3 rounded-r-lg">Subscribe</button>
                        </form>
                        <br />
                        <p>Stay up to date with our latest news and promotions and upcoming events</p>
                    </div>

                </footer>
            </Container>
        </div>
    );
};

export default Footer;