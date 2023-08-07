import { Link } from "react-router-dom";
import Container from "../../../components/Container/Container";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import aboutUsImage from "../../../assets/aboutUs-image.jpg"

const AboutUs = () => {
    return (
        <div>
            <div className="bg-slate-900 pb-20 text-white">
                <Container>
                    <div className="mb-12">
                        <SectionTittle heading="We We are" subHeading="Read something exciting about us."></SectionTittle>
                    </div>
                    <div className="flex items-center">
                        <div className="w-1/2 h-full space-y-4 pr-12">
                            <h1 className="text-4xl uppercase">Best dance school & summer camp arranger since 1998</h1>
                            <p className="text-justify">Experience the joy of dance at DanceFusion Studios. Explore diverse styles, learn from expert instructors, and join a vibrant community. Unleash your passion and make this summer unforgettable. Enroll today and Unleash your inner dancer this summer with our exciting and immersive dance programs.</p>
                            <br />
                            <br />
                            <Link to='/about' className="border-2 px-3 rounded-lg hover:bg-slate-600 py-3 bg-slate-900 text-white">About Us</Link>
                        </div>
                        <div className="w-1/2 h-full">
                            <img src={aboutUsImage} alt="" className="h-full w-full rounded-lg" />
                        </div>
                    </div>
                </Container>

            </div >
        </div >
    );
};

export default AboutUs;