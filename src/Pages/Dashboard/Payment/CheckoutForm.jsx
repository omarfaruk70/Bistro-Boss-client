import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import { AuthContext } from "../../../../Providers/AuthProviders";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
    const [allcartItem] = useCart();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transectionId, setTransectionId] = useState('');

    let totalPrice = 0;
    allcartItem.forEach(item => {
      totalPrice = totalPrice + item.price;
    })

    useEffect( () => {
      if(totalPrice > 0){
        axiosSecure.post('/create-payment-intent', {price: totalPrice})
        .then(res => {
          setClientSecret(res.data.clientSecret);
        })
      }
    },[axiosSecure, totalPrice])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!stripe || !elements){
        return ;
    }

    const card = elements.getElement(CardElement);
    if(card == null){
        return ;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card
    })

    if(error){
        // console.log('Payment error',error);
       return setError(error.message)
    }else{
        console.log("Payment method",paymentMethod);
        setError('')
    }

    // confirm payment with card
    const {paymentIntent, error: confirmCardError} = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user?.displayName || 'anonymous',
          email: user?.email || 'anonymous'
        }
      }
    })

    if(confirmCardError){
      console.log('confirm card error', confirmCardError)
    }else{
      // console.log('paymentIntent', paymentIntent);
      if(paymentIntent.status === 'succeeded'){
        console.log('Transection Successful ! Transection id', paymentIntent.id);
        setTransectionId(paymentIntent.id);
      }
    }

  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button type="submit" className="btn bg-yellow-600 my-5" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-500">{error}</p>
      {transectionId && <p className="text-green-800">Success! Your transectionId is {transectionId}</p>}
    </form>
  );
};

export default CheckoutForm;
