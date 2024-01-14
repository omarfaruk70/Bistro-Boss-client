const FoodCard = ({ item }) => {
  const { name, price, image, recipe } = item;
  console.log(item);
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10">
      <figure><img src={image} alt="Food Image" className="object-cover" /></figure>
      <p className="absolute right-0 mt-4 mr-4 px-2 bg-slate-800  text-white">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
