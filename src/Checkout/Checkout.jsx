import Sectiontitle from "../components/SectionTitle/SectionTitle";
import checkoutImg from '.././assets/home/featured.jpg'
import './checkout.css'

const Checkout = () => {
    return (
        <div className="checkout-section py-10">
         <div className="text-white">
         <Sectiontitle
            heading='FROM OUR MENU'
            subheading='Check it out'
            ></Sectiontitle>
         </div>
            <div className="flex flex-col px-10 md:flex-row justify-center items-center max-w-5xl gap-8 mx-auto py-8">
                <div className="w-3xl">
                    <img src={checkoutImg} alt="" />
                </div>
                <div className="text-white">
                    <h4 className="text-2xl">January 20, 2024</h4>
                    <h1 className="text-4xl">WHERE CAN I GET SOME?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white uppercase">Read more</button>
                </div>
            </div>
        </div>

    );
};

export default Checkout;