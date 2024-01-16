import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    const axios = useAxiosSecure();
    useEffect(() => {
        axios.get('/menu')
        .then(result => {
            setMenu(result.data)
            setLoading(false);
        })
    },[])
    return [menu, loading];
}
export  default useMenu;
