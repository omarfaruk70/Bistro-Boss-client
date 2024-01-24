import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";

const Allusers = () => {
    const axiosSecure = useAxiosSecure();
    const {data} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await axiosSecure.get('/allusers')
            .then(result => {
               return result.data ;
            })
            return response
        }
    })
    return (
        <div>
            <div className="flex justify-evenly my-5">
                <h2 className="text-3xl">Total User : {data?.length}</h2>
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
            {data?.map((item, i) => (
              <tr key={item._id}>
                <th>{i + 1}</th>
                <td className="text-xl">{item.name}</td>
                <td className="text-xl">{item.email}</td>
                <td className="text-2xl">{item.price} <span className="text-base font-bold">$</span></td>
                <th>
                  <button className="btn">
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