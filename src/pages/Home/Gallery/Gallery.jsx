import Container from "../../../components/Container/Container";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import aImag1 from '../../../assets/Gallery/galleryImg1.jpg'
import aImag2 from '../../../assets/Gallery/galleryImg2.jpg'
import aImag3 from '../../../assets/Gallery/galleryImg3.jpg'
import aImag4 from '../../../assets/Gallery/galleryImg4.jpg'
import aImag5 from '../../../assets/Gallery/galleryImg5.jpg'
import aImag6 from '../../../assets/Gallery/galleryImg6.jpg'


const Gallery = () => {
    return (
        <div>
            <div className="bg-slate-100 pb-20">
                <Container>
                    <div className="mb-12">
                        <SectionTittle heading="Our Gallery" subHeading="Explore our awesome enthusiastic Gallery"></SectionTittle>
                    </div>

                    <div className="md:flex gap-8 w-full pb-10 px-4 md:px-0">
                        <div className="md:w-6/12">
                            <div className="w-full h-[300px] flex gap-8">
                                <div className="w-6/12">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src={aImag1} />
                                </div>
                                <div className="w-6/12">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src={aImag2} />
                                </div>
                            </div>
                            <div className="w-full h-[300px] mt-8">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={aImag3} />
                            </div>
                        </div>
                        <div className="md:w-6/12">
                            <div className="w-full h-[300px] mb-8">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={aImag4} />
                            </div>
                            <div className="w-full h-[300px] flex gap-8">
                                <div className="w-6/12">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src={aImag5} />
                                </div>
                                <div className="w-6/12">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src={aImag6} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div >
        </div >
    );
};

export default Gallery;