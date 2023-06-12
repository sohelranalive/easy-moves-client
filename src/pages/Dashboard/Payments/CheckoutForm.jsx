import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect } from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import useUser from '../../../hooks/useUser';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const CheckoutForm = ({ price, payableItem }) => {

    const { user } = useAuth()
    const [, , refetch] = useUser()
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    // console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        setCardError('')
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card == null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            // console.log('[error]', error);
            setCardError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        if (paymentIntent.status == 'succeeded') {
            setTransactionId(paymentIntent.id)
            setProcessing(false)
            //save payment info to db
            const payment = {
                email: user?.email,
                price,
                date: new Date(),
                transactionId: paymentIntent.id,
                selectedClassId: payableItem._id,
                classesId: payableItem.classId
            }

            axiosSecure.post('/user/payments', payment)
                .then(res => {
                    if (res.data) {
                        // console.log(res.data);
                        if (res.data) {
                            Swal.fire({
                                title: 'Payment Successful',
                                icon: 'success',
                                showCancelButton: false,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: `Done`
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    refetch()
                                    navigate('/dashboard/user-home')
                                }
                            })

                        }
                    }
                })
        }
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '20px',
                                padding: '4px',
                                textShadow: '5px',
                                color: '#181A1B',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <br />
            {cardError && <p className='text-2xl text-red-600'>{cardError}</p>}
            {transactionId && <p className="text-green-600 font-bold">Transaction successful, Transaction Id: <span className='text-black bold italic'> {transactionId}</span></p>}
        </>
    );
};

export default CheckoutForm;
