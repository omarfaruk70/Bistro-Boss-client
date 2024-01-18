import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const useCart = () => {
    const axios = useAxiosSecure();
    const {user} = useContext(AuthContext);
    const userEmail = user?.email;
    const {data: allcartItem = [], refetch} = useQuery({
      queryKey: ['cartItem ', userEmail],
      queryFn: async() => {
          const res = await axios.get(`/getallCard?email=${userEmail}`);
          return res.data;
        }
    })
    return [allcartItem, refetch]
};


export default useCart;