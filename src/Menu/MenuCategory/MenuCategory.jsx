import { Link } from "react-router-dom";
import Menucover from "../../shared/Menucover/Menucover";
import Menuitem from "../../shared/Menuitem/Menuitem";

const MenuCategory = ({items, coverImg, title, paragraph}) => {
    return (
        <div>
            { title && <Menucover img={coverImg} title={title} paragraph={paragraph}></Menucover>}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 mb-5">
                {
                    items?.map(menu => <Menuitem
                    key={menu?._id}
                    menu={menu}
                    ></Menuitem>)
                }
            </div>
           <div className="text-center mb-5">
           <Link 
           to={`/order/${title}`}
        ><button className="btn btn-outline border-0 border-b-4 uppercase">See All Menu</button></Link>
           </div>
        </div>
    );
};

export default MenuCategory;