const SectionTittle = ({ heading, subHeading }) => {
    return (
        <div className="w-4/6 mx-auto text-center pt-12">
            <h1 className="uppercase text-4xl">{heading}</h1>
            <p className="italic">{subHeading}</p>
        </div>
    );
};

export default SectionTittle;