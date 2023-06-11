const EnrolledClassCard = ({ enrolledClass }) => {

    const { className, instructorName, totalEnrolled, classPhoto } = enrolledClass

    return (
        <div className="card card-side bg-red-200 shadow-2xl">
            <figure><img src={classPhoto} className="w-40 h-full" alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{className}</h2>
                <p>Instructor Name: {instructorName}</p>
                <p>Enrolled Student: {totalEnrolled}</p>
            </div>
        </div>
    );
};

export default EnrolledClassCard;