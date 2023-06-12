import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from "./CheckoutForm";
import useUser from "../../../hooks/useUser";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY)

const Payment = () => {
    const { id } = useParams()
    const [userStats] = useUser()
    // const payableAmount = userStats.selectedClassResult.reduce((sum, item) => item.price + sum, 0)
    const payableItem = userStats.selectedClassResult.find(item => item._id == id)
    // console.log(payableAmount);
    const price = parseFloat((payableItem.price).toFixed(2))
    console.log(price);
    // console.log(userStats.selectedClassResult);

    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-2xl text-center italic underline">To continue with payment procedure, please provide all the necessary information</h1>
            <br />
            <Elements stripe={stripePromise}>
                <div className="border-2 border-green-400 py-8 px-4 rounded-md shadow-2xl mt-12 mb-16">
                    <CheckoutForm payableItem={payableItem} price={price} />
                </div>
            </Elements>

            <div className="border-2 border-red-900 rounded-lg shadow-inner p-8 w-3/6">
                <p>You can use below Sample card details to payment:</p>
                <p>Card Number: 4242 4242 4242 4242</p>
                <p>Date: 10/30 (or any future date)</p>
                <p>CVV: 123 (or any 3 digits)</p>
                <p>Zip: 12345 (or any 5 digits)</p>
            </div>
        </div>
    );
};

export default Payment;