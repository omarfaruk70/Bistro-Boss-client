import { useLoaderData } from "react-router-dom";
import Sectiontitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa6";
import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const UpdateItem = () => {
  const data = useLoaderData();
  const { _id, name, price, recipe, category } = data;
  const { register, handleSubmit} = useForm();
  const IMG_HOSTING_API_KEY = import.meta.env.VITE_IMG_HOSTING_API_KEY;
  const Hosting_img_link = `https://api.imgbb.com/1/upload?key=${IMG_HOSTING_API_KEY}`;
  const handleUpdateItem = async (data) => {
    const imageFile = { image: data.image[0] };
    // kkhn o file type[img or anything] post korar jnno ekta header er vitor content-type: multipart/form-data set krte hy
    const res = await useAxiosPublic.post(Hosting_img_link, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data?.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        image: res.data.data.display_url,
        recipe: data.recipe,
      };
      const menuRes = await useAxiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes);
      // if (menuRes.data.insertedId) {
      //   Swal.fire({
      //     position: "top-end",
      //     icon: "success",
      //     title: "Your item is added",
      //     showConfirmButton: false,
      //     timer: 1500,
      //   });
      // }
    }
  };

  return (
    <div>
      <Sectiontitle
        heading={"Update An Item"}
        subheading="Need Modify  ? "
      ></Sectiontitle>
      <div>
        <form onSubmit={handleSubmit(handleUpdateItem)}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Recipe name*</span>
            </div>
            <input
              defaultValue={name}
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
                defaultValue={category}
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
                defaultValue={price}
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
              defaultValue={recipe}
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
            Update Item <FaUtensils className="text-xl ml-2"></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;