import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/paymenthistory/${user?.email}`);
      return res.data;
    },
  });
  console.log(payments);
  return (
    <div>
      <h3 className="text-5xl text-center mb-8">
        Total Payment : {payments.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Sl.</th>
              <th>Email</th>
              <th>Category</th>
              <th>Delivery status</th>
              <th>Transection Id</th>
              <th>Payments</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>{payment.email}</td>
                <td>{payment.price}</td>
                <td>{payment.status}</td>
                <td>{payment.transectionId}</td>
                <td>{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
