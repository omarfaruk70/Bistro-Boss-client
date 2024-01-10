import { useEffect, useState } from "react";
import Sectiontitle from "../../components/SectionTitle/SectionTitle";
import Menuitem from "../../shared/Menuitem/Menuitem";

const Menus = () => {
    const [menus, setMenus] = useState([]);
    useEffect( ()=> {
        fetch('menus.json')
        .then(res => res.json())
        .then(data => {
            const popularItem = data.filter(item => item.category === 'popular');
            setMenus(popularItem)
        })
    },[])
    return (
        <div>
            <Sectiontitle
            heading='From Our Menus'
            subheading='Popular item'
            ></Sectiontitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 mb-5">
                {
                    menus.map(menu => <Menuitem
                    key={menu._id}
                    menu={menu}
                    ></Menuitem>)
                }
            </div>
        </div>
    );
};

export default Menus;