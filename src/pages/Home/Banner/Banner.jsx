import { Link } from "react-router-dom";
import Container from "../../../components/Container/Container";
import '../Banner/Banner.css'

const Banner = () => {
    return (
        <div className="my-banner text-white">
            <Container>
                <div className="flex items-center h-[500px]">
                    <div className="md:w-1/2 space-y-4">
                        <p className="font-bold uppercase">Hello Students</p>
                        <h1 className="text-4xl font-bold">Welcome to EasyMoves</h1>
                        <p>Take advantage of the best summer camp experience ever. We are arranging the summer camp from the last 10 years. We will help you boost your dancing skills. We promise, we will make your summer vacation worthy.</p>
                        <button className="bg-[#AB1318] py-2 px-3 rounded-lg">
                            <Link to='/login'>Join us now</Link>
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;