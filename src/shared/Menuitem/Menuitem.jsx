const Menuitem = ({menu}) => {    
    return (
        <div className="flex gap-5">
            <img className="w-32 h-32 rounded-tr-full rounded-br-full rounded-bl-full object-cover" src={menu?.image} alt="" />
            <div>
                <h3 className="text-3xl">{menu?.name} ---------------</h3>
                <p>{menu?.recipe}</p>
            </div>
            <p className="text-yellow-500">${menu?.price}</p>
            
        </div>
    );
};

export default Menuitem;