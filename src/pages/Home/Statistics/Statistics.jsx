import Container from "../../../components/Container/Container";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";

const Statistics = () => {
    return (
        <div>
            <div className="bg-slate-100 pb-20">
                <Container>
                    <div className="mb-8">
                        <SectionTittle heading="Our results in numbers" subHeading="We have very successful track record, here is the statistics"></SectionTittle>
                    </div>

                    <div className="md:flex md:items-center md:justify-between py-4 space-y-4 md:space-y-0">
                        <div className="text-center">
                            <p className="text-4xl font-semibold text-slate-900">99 %</p>
                            <p>Students Satisfaction</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-semibold text-slate-900">15 K</p>
                            <p>Graduated Students</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-semibold text-slate-900">12 K</p>
                            <p>Enrolled Student</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-semibold text-slate-900">85%</p>
                            <p>Referred Students</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-semibold text-slate-900">240 %</p>
                            <p>Company Growth</p>
                        </div>
                    </div>


                </Container>

            </div >
        </div >
    );
};

export default Statistics;