const SinglePaymentRow = ({ singlePayment }) => {

    const { transactionId, date, price } = singlePayment

    return (
        <tr>
            <td>{transactionId}</td>
            <td>{date}</td>
            <td>{price}</td>
        </tr>
    );
};

export default SinglePaymentRow;