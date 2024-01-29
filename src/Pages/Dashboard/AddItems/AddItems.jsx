import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Sectiontitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const IMG_HOSTING_API_KEY = import.meta.env.VITE_IMG_HOSTING_API_KEY;
const Hosting_img_link = `https://api.imgbb.com/1/upload?key=${IMG_HOSTING_API_KEY}`;
const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
     // kkhn o file type[img or anything] post korar jnno ekta header er vitor content-type: multipart/form-data set krte hy
    const res = await axiosPublic.post(Hosting_img_link, imageFile, {
      headers: {
        "Content-Type": 'multipart/form-data'
      }
    });
    if(res.data?.success){
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        image: res.data.data.display_url,
        recipe: data.recipe
      }
      const menuRes = await axiosSecure.post('/menu', menuItem);
      reset();
      if(menuRes.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your item is added",
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
  };

  return (
    <div className="border-2 p-10 my-6 rounded-lg">
      <Sectiontitle
        heading="Add an Item"
        subheading="what's New ?"
      ></Sectiontitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Recipe name*</span>
            </div>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full"
            />
          </label>
          <div className="flex gap-6">
            {/* category */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
                defaultValue={"defaultValue"}
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value={"defaultValue"}>
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
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                {...register("price", { required: true })}
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
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered"
              placeholder="Recipe details"
            ></textarea>
          </label>
          <div className="form-control w-full my-3">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <button className="btn bg-yellow-400 text-white">
            Add Item <FaUtensils className="text-xl ml-2"></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
