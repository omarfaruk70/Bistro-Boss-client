const Menuitem = ({menu}) => {
    const {name, image, recipe, price} = menu ;
    return (
        <div className="flex gap-5">
            <img className="w-32 h-32 rounded-tr-full rounded-br-full rounded-bl-full " src={image} alt="" />
            <div>
                <h3 className="text-3xl">{name} ---------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
            
        </div>
    );
};

export default Menuitem;