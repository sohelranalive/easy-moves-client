import { Link } from "react-router-dom";
import Container from "../../../components/Container/Container";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const SubHeading = () => {
    return (
        <div className="bg-slate-900 text-white">
            <Container>
                <div className="md:flex md:justify-between items-center py-1 text-center">
                    <div>
                        <p className="uppercase">Best Summer camp with easy moves</p>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex space-x-5">
                            <Link><FaFacebookF /></Link>
                            <Link><FaInstagram /></Link>
                            <Link><FaTwitter /></Link>
                            <Link><FaYoutube /></Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SubHeading;