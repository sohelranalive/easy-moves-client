import useUser from "../../../hooks/useUser";
import SinglePaymentRow from "./SinglePaymentRow";

const UserPayments = () => {

    const [userStats] = useUser()
    const allPayments = userStats.usersAllPayment;

    return (
        <div className="w-10/12 mx-auto">
            <h1 className="text-3xl text-center underline">See all your previous payments</h1>
            <br />
            <div className="mt-8">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Transaction Id</th>
                                <th>Transaction Date</th>
                                <th>Paid Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row will show here from SingleUserData Component */}
                            {
                                allPayments.map(singlePayment => <SinglePaymentRow
                                    key={singlePayment._id}
                                    singlePayment={singlePayment}>
                                </SinglePaymentRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserPayments;