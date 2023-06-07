import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import '../Features/Features.css'
import Container from "../../../components/Container/Container";
import choreography from '../../../assets/Swiper/choreography.png'
import onetoone from '../../../assets/Swiper/onetoone.png'
import types from '../../../assets/Swiper/types.png'
import competitions from '../../../assets/Swiper/competitions.png'
import bed from '../../../assets/Swiper/bed.png'

const Features = () => {

    const breakpoints = {
        1536: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    };

    return (
        <div className="bg-transparent -mt-32">
            <Container>
                <div className="border">
                    <Swiper
                        breakpoints={breakpoints}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="card w-80 h-80 bg-[#AB1318] text-primary-content">
                                <div className="card-body text-white flex flex-col items-center">
                                    <img src={choreography} height={70} width={70} alt="" />
                                    <h1 className="text-3xl">Best Choreographer</h1>
                                    <p>You will get the chance to learn from leading Choreographer from all over the world</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card w-80 h-80 bg-[#AB1318] text-primary-content">
                                <div className="card-body text-white flex flex-col items-center">
                                    <img src={onetoone} height={70} width={70} alt="" />
                                    <h1 className="text-3xl">One to One Session</h1>
                                    <p>There will be one to one secession for week students. You get the best support from us if you keen to learn</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card w-80 h-80 bg-[#AB1318] text-primary-content">
                                <div className="card-body text-white flex flex-col items-center">
                                    <img src={types} height={70} width={70} alt="" />
                                    <h1 className="text-3xl">Different Kind of Dance</h1>
                                    <p>You will get the chance to learn any kind of dance from all over the world. Like classic, hiphop, arabian and many more.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card w-80 h-80 bg-[#AB1318] text-primary-content">
                                <div className="card-body text-white flex flex-col items-center">
                                    <img src={competitions} height={70} width={70} alt="" />
                                    <h1 className="text-3xl">Unique Dance Competitions</h1>
                                    <p>There will a dance competitions at the end of the camp. You get the chance to challenge your to win.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card w-80 h-80 bg-[#AB1318] text-primary-content">
                                <div className="card-body text-white flex flex-col items-center">
                                    <img src={bed} height={70} width={70} alt="" />
                                    <h1 className="text-3xl">Single and Shared Bed Facility</h1>
                                    <p>Students will be able to choose bedroom facility. They will get the option to choose single or shared room.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card w-80 h-80 bg-[#AB1318] text-primary-content">
                                <div className="card-body text-white flex flex-col items-center">
                                    <img src={bed} height={70} width={70} alt="" />
                                    <h1 className="text-3xl">4 Times Foods Per Day</h1>
                                    <p>Students will get 4 times healthy food. In house dinning facility for different kind of healthy ans tasty foods. </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Container>
        </div>
    );
};

export default Features;