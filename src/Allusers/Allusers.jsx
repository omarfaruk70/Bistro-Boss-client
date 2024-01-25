import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const Allusers = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await axiosSecure.get('/allusers')
            .then(result => {
               return result.data ;
            })  
            return response
        }
    })
    const handleMakeAdmin = () => {

    }
    const handleDeleteUser = (userId) => {
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
          axiosSecure.delete(`/allusers/${userId}`)
          .then(response => {
            if(response.data.deletedCount === 1){
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
            <div className="flex justify-evenly my-5">
                <h2 className="text-3xl">Total User : {users?.length}</h2>
            </div>
            <div>
            <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users?.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td className="text-xl">{user.name}</td>
                <td className="text-xl">{user.email}</td>
                <td className="text-2xl">
                <button onClick={() => handleMakeAdmin(user._id)} className="btn bg-yellow-400">
                   <FaUsers className="text-2xl text-white"></FaUsers>
                  </button>
                </td>
                <th>
                  <button onClick={() => handleDeleteUser(user._id)} className="btn">
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
        </div>
    );
};

export default Allusers;