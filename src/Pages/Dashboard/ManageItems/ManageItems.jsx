import { MdDelete } from "react-icons/md";
import Sectiontitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaRegEdit } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  const handleDeleteItem = async (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then( async(result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        refetch();
        if(res?.data?.deletedCount > 0){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Item has been Deleted",
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
    });
  };
  return (
    <div>
      <div>
        <Sectiontitle
          heading="Manage All Items"
          subheading="---Hurry Up!---"
        ></Sectiontitle>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Sl</th>
                <th>Img</th>
                <th>Name</th>
                <th>Price</th>
                <th>Edit</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {menu?.map((item, i) => (
                <tr key={item._id}>
                  <th>{i + 1}</th>
                  <td className="text-xl">
                    <img
                      className="h-20 w-20 rounded-xl object-cover"
                      src={item.image}
                      alt=""
                    />
                  </td>
                  <td className="text-xl">{item.name}</td>
                  <td className="text-xl">
                    {item.price} <span className="font-bold text-sm">$</span>
                  </td>
                  <td className="text-2xl">
                    <Link to={`/dashboard/updateitem/${item._id}`}>
                    <button
                      className="btn bg-yellow-300"
                    >
                      <FaRegEdit className="text-2xl text-white"></FaRegEdit>
                    </button>
                    </Link>
                  </td>
                  <th>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn"
                    >
                      <MdDelete className="text-3xl text-red-500"></MdDelete>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
