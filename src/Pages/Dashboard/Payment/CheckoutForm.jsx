import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import { AuthContext } from "../../../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [allcartItem, refetch] = useCart();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transectionId, setTransectionId] = useState("");
  const navigate = useNavigate();
  let totalPrice = 0;
  allcartItem.forEach((item) => {
    totalPrice = totalPrice + item.price;
  });

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      // console.log('Payment error',error);
      return setError(error.message);
    } else {
      console.log("Payment method", paymentMethod);
      setError("");
    }

    // confirm payment with card
    const { paymentIntent, error: confirmCardError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });

    if (confirmCardError) {
      console.log("confirm card error", confirmCardError);
    } else {
      // console.log('paymentIntent', paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log(
          "Transection Successful ! Transection id",
          paymentIntent.id
        );
        setTransectionId(paymentIntent.id);

        // now save the payment details / payment history in the database for
        // case 1: show user (orderd and view order) and remove these item from the cart element
        // case 2: save the payment history to admin / manager to (show payment done and shipment pending)

        const payment = {
          email: user?.email,
          price: totalPrice,
          date: new Date(), // date formate covert for intl. customer using moment.js
          name: user?.displayName,
          transectionId: paymentIntent.id,
          cartIds: allcartItem.map((item) => item._id),  // for delete / clear the my cart section
          menuItemIds: allcartItem.map(item => item.menuitemId), // for oder id of each products
          status: 'pending'
        };
        const res = await axiosSecure.post('/payments', payment);
        // console.log(res.data);
        if(res.data?.paymentHistory?.insertedId){
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your order is confirmed! We will work on it",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/dashboard/paymenthistory');
        }
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
      <button
        type="submit"
        className="btn bg-yellow-600 my-5"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-500">{error}</p>
      {transectionId && (
        <p className="text-green-800">
          Success! Your transectionId is {transectionId}
        </p>
      )}
    </form>
  );
};

export default CheckoutForm;
