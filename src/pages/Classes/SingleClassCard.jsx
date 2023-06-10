const SingleClassCard = ({ singleClass }) => {
    const { classPhoto, className, instructorName, availableSeats, price } = singleClass
    return (
        <div className="card h-full bg-base-100 shadow-2xl">
            <figure><img src={classPhoto} alt="Class Image" className="h-60 w-full" /></figure>
            <div className="card-body">
                <h2 className="card-title">{className}</h2>
                <p>Instructor: {instructorName}</p>
                <p>Set Remaining: {availableSeats}</p>
                <p>Class Fees: {price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Take Class</button>
                </div>
            </div>
        </div>
    );
};

export default SingleClassCard;