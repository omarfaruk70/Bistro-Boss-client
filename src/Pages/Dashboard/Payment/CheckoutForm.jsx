import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')


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
        console.log('Payment error',error);
       return setError(error.message)
    }else{
        console.log("Payment method",paymentMethod);
        setError('')
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
      <button type="submit" className="btn bg-yellow-600 my-5" disabled={!stripe}>
        Pay
      </button>
      <p className="text-red-500">{error}</p>
    </form>
  );
};

export default CheckoutForm;
