const EnrolledClassCard = ({ enrolledClass }) => {

    const { className, instructorName, totalEnrolled, classPhoto } = enrolledClass

    return (
        <div className="bg-slate-600 shadow-2xl h-40 w-full flex rounded-lg">
            <div className="w-2/6"><img src={classPhoto} alt="Movie" className="h-full w-full" /></div>
            <div className="w-4/6 text-white ps-8 flex flex-col justify-center">
                <h2 className="card-title">{className}</h2>
                <p>Email: {instructorName}</p>
                <p>Address: {totalEnrolled}</p>
            </div>
        </div>
    );
};

export default EnrolledClassCard;