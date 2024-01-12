import Menuitem from "../../shared/Menuitem/Menuitem";
import useMenu from '../../hooks/useMenu';
const Menus = () => {
    const [menu]=useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    return (
        <div>
         
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 mb-5">
                {
                    popular.map(menu => <Menuitem
                    key={menu?._id}
                    menu={menu}
                    ></Menuitem>)
                }
            </div>
        </div>
    );
};

export default Menus;