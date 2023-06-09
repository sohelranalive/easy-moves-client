const SingleClass = ({ singleClass, index }) => {

    const { classPhoto, className, instructorName, instructorEmail, availableSeats, status, price } = singleClass;

    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="avatar">
                    <div className="w-20 h-20 rounded-md">
                        <img src={classPhoto} alt="class photo" />
                    </div>
                </div>
            </td>
            <td>{className}</td>
            <td>
                <div className="flex flex-col">
                    <div className="font-bold">Name: {instructorName}</div>
                    <div className="text-sm">Email: {instructorEmail}</div>
                </div>
            </td>
            <td className="text-center">{availableSeats}</td>
            <td className="text-center">$ {price}</td>
            <td className="text-center">{status}</td>
            <td className="text-center">
                <button className="btn btn-ghost btn-xs">Approve</button>
                <button className="btn btn-ghost btn-xs">Deny</button>
                <button className="btn btn-ghost btn-xs">Feedback</button>
            </td>
        </tr>
    );
};

export default SingleClass;