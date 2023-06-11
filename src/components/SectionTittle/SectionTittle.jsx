import { Fade, Slide } from "react-awesome-reveal";

const SectionTittle = ({ heading, subHeading }) => {
    return (

        <div className="w-4/6 mx-auto text-center pt-12">
            <Slide>
                <h1 className="uppercase text-4xl">{heading}</h1>
            </Slide>
            <Fade delay={1000}>
                <p className="text-2xl">{subHeading}</p>
            </Fade>
        </div>

    );
};

export default SectionTittle;