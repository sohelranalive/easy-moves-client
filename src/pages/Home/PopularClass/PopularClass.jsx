import Container from "../../../components/Container/Container";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";

const PopularClass = () => {
    return (
        <div className="bg-slate-900 h-[500px]">
            <Container>
                <div className="text-white">
                    <SectionTittle heading="Popular Classes" subHeading="We have more a total of 10 classes at this moment. Explore our most popular classes among them"></SectionTittle>
                </div>
            </Container>
        </div>
    );
};

export default PopularClass;