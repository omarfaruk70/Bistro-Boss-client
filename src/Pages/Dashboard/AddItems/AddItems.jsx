import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Sectiontitle from "../../../components/SectionTitle/SectionTitle";

const AddItems = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="border-2 p-10 my-6 rounded-lg">
      <Sectiontitle
        heading="Add an Item"
        subheading="what's New ?"
      ></Sectiontitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label  className="form-control w-full">
            <div className="label">
              <span className="label-text">Recipe name*</span>
            </div>
            <input
            {...register("name", {required: true})}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full"
            />
          </label>
          <div className="flex gap-6">
            {/* category */}
            <label
              className="form-control w-full my-6"
            >
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
               {...register("category", {required: true})}
                className="select select-bordered w-full"
              >
                <option disabled selected>
                  Category
                </option>
                <option value={"salad"}>Salad</option>
                <option value={"pizza"}>Pizza</option>
                <option value={"soup"}>Soup</option>
                <option value={"dessert"}>Dessert</option>
                <option value={"drinks"}>Drinks</option>
              </select>
            </label>
            {/* price */}
            <label  className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
              {...register("price", {required: true})}
                type="number"
                placeholder="Recipe price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
            <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Recipe details*</span>
            </div>
            <textarea  {...register("recipe", {required: true})} className="textarea textarea-bordered" placeholder="Recipe details"></textarea>
          </label>
          <div className="form-control w-full my-3">
          <input  {...register("image", {required: true})} type="file" className="file-input w-full max-w-xs" />
          </div>
            <button className="btn bg-yellow-400 text-white">Add Item <FaUtensils className="text-xl ml-2"></FaUtensils></button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
