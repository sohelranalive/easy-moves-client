const EnrolledClassCard = ({ enrolledClass }) => {

    const { } = enrolledClass

    return (
        <div className='bg-primary text-white'>
            <div className="card-body">
                <h2 className="card-title">{className}</h2>
                <p>Total Seats: {totalSeats}</p>
                <p>Total Enrolled: {totalEnrolled}</p>
                <p>Available Seats: {availableSeats}</p>
                <div className="mt-4">
                    <hr className="border-gray-200 border-2 w-full" />
                    <p>Status: {status}</p>
                    {status == 'denied' && <p>FeedBack: {feedback}</p>}
                </div>
                <div className="text-end mt-4">
                    <button onClick={handleUpdateClass}><FaRegEdit className='text-4xl' /></button>
                </div>
            </div>
        </div>
    );
};

export default EnrolledClassCard;