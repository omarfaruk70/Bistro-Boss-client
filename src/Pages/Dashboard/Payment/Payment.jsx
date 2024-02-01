import { loadStripe } from "@stripe/stripe-js";
import Sectiontitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


// TODO: create an account and add stripe publishable key(pk);
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHING_KEY);
const Payment = () => {
    return (
        <div>
            <Sectiontitle heading='Payment to proceed' subheading='PAYMENT'></Sectiontitle>            
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;