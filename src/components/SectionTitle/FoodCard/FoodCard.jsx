import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { _id, name, price, image, recipe } = item;
  const {user} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const axios = useAxiosSecure();
  const [, refetch] = useCart();
  const handleAddToCart = () => {
    if(user && user?.email){
      const cartItemInfo = {
        menuitemId: _id,
        email: user.email,
        name,
        price,
        image,
      } 
      axios.post('/addToCard', cartItemInfo)
      .then(result => {
        if(result.data.insertedId){
          Swal.fire({
            title: "Good job!",
            text: "Your item is added",
            icon: "success"
          });
        }
        // refetch cart to update the cart items and load updated cart .
        refetch();
      })
    }
    else{
      Swal.fire({
        title: "Opps ! Login first",
        text: "You'r not logged in user",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to Log in"
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/login', { state: {from: location}})
        }
      });
    }
  }
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10">
      <figure><img src={image} alt="Food Image" className="object-cover" /></figure>
      <p className="absolute right-0 mt-4 mr-4 px-2 bg-slate-800  text-white">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button onClick={handleAddToCart} className="btn hover:bg-slate-800 hover:text-white">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
