import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Cart = () => {
  const [allcartItem, refetch] = useCart();
  let totalPrice = 0;
  allcartItem.forEach((item) => {
    totalPrice = totalPrice + item.price;
  });
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/deleteitemfromMycart/${id}`)
        .then(res => {
          if(res.data.deletedCount === 1){
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            }); 
            refetch();
          }
        })
       
      }
    });
  }
  return (
    <div>
      <div className="bg-yellow-400 py-5 flex justify-evenly items-center p-5 rounded-bl-3xl rounded-br-3xl">
        <h1>Total Orders: {allcartItem.length}</h1>
        <h1>Total Price: {totalPrice} $</h1>{" "}
        {/** alternative way to use math.reduce for calculating shopping cart */}
        <Link to='/dashboard/payment'><button className="btn btn-outline">Pay</button></Link>
      </div>
      {/* table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allcartItem.map((item, i) => (
              <tr key={item._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="Food image" />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-xl">{item.name}</td>
                <td className="text-2xl">{item.price} <span className="text-base font-bold">$</span></td>
                <th>
                  <button onClick={()=> handleDelete(item._id)} className="btn">
                   <MdDelete className="text-2xl text-red-500"></MdDelete>
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
