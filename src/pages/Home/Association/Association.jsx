import Marquee from "react-fast-marquee";
import SectionTittle from '../../../components/SectionTittle/SectionTittle';
import drama from '../../../assets/Association/drama.png'
import event from '../../../assets/Association/event.png'
import food from '../../../assets/Association/food.png'
import medical from '../../../assets/Association/medical.png'
import music from '../../../assets/Association/music.png'
import Container from "../../../components/Container/Container";

const Association = () => {
    return (
        <div>
            <div className="bg-slate-100 pb-20">
                <Container>
                    <div className="mb-8">
                        <SectionTittle heading="In Association With" subHeading="Meet our exclusive partners who will support us throughout the events"></SectionTittle>
                    </div>


                    <div className="flex justify-center">
                        <div className="marquee-container">
                            <Marquee>
                                <div>
                                    <img
                                        src={event}
                                        alt="event partner"
                                        className="w-40 h-32 object-contain mx-8"
                                        style={{ maxWidth: '100%', maxHeight: '100%' }}
                                    />
                                </div>
                                <div>
                                    <img
                                        src={drama}
                                        alt="drama partner"
                                        className="w-40 h-32 object-contain mx-8"
                                        style={{ maxWidth: '100%', maxHeight: '100%' }}
                                    />
                                </div>
                                <div>
                                    <img
                                        src={food}
                                        alt="food partner"
                                        className="w-40 h-32 object-contain mx-8"
                                        style={{ maxWidth: '100%', maxHeight: '100%' }}
                                    />
                                </div>
                                <div>
                                    <img
                                        src={music}
                                        alt="music partner"
                                        className="w-40 h-32 object-contain mx-8"
                                        style={{ maxWidth: '100%', maxHeight: '100%' }}
                                    />
                                </div>
                                <div>
                                    <img
                                        src={medical}
                                        alt="medical partner"
                                        className="w-40 h-32 object-contain mx-8"
                                        style={{ maxWidth: '100%', maxHeight: '100%' }}
                                    />
                                </div>
                            </Marquee>
                        </div>
                    </div>

                </Container>

            </div >
        </div >
    );
};

export default Association;