const SinglePaymentRow = ({ singlePayment }) => {

    const { transactionId, date, price } = singlePayment

    const showDate = new Date(date);

    const formattedDate = showDate.toLocaleString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short'
    });



    return (
        <tr>
            <td>{transactionId}</td>
            <td>{formattedDate}</td>
            <td>{price}</td>
        </tr>
    );
};

export default SinglePaymentRow;