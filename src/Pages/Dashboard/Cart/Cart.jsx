import useCart from "../../../hooks/useCart";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const [allcartItem] = useCart();
  let totalPrice = 0;
  allcartItem.forEach((item) => {
    totalPrice = totalPrice + item.price;
  });
  return (
    <div>
      <div className="bg-yellow-400 py-5 flex justify-evenly items-center p-5 rounded-bl-3xl rounded-br-3xl">
        <h1>Total Orders: {allcartItem.length}</h1>
        <h1>Total Price: {totalPrice} $</h1>{" "}
        {/** alternative way to use math.reduce for calculating shopping cart */}
        <button className="btn btn-outline">Pay</button>
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
                  <button className="btn">
                   <MdDelete className="text-2xl text-red-500"></MdDelete>
                    Button
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
