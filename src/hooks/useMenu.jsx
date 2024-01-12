import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('menus.json')
        .then(res => res.json())
        .then(data => {
            setMenu(data)
            setLoading(loading)
        })
    },[])
    return [menu, loading];
}
export  default useMenu;
