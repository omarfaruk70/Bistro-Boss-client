// this register page all uses react hook form

import { useContext} from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors  },
  } = useForm();

  const { registerUser } = useContext(AuthContext);
  const onSubmit = (data) => {
    console.log(data);
    registerUser(data.email, data.password)
    .then(result => {
     const user = result.user;
     Swal.fire({
      position: "top-end",
      icon: "success",
      title: "user is registered",
      showConfirmButton: false,
      timer: 1500
    });
    console.log(user);
    reset()

    })
  };

  // const handleRegister = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   registerUser(email, password).then((res) => {
  //     console.log(res);
  //   });
  // };
  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Bistro Boss | Register </title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign up here!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                // name="name"
                {...register("name", {required: true})} //---- > its like name="name" property
                placeholder="name"
                className="input input-bordered"
              />
              {errors.name && <span className="font-thin text-red-500 text-start mt-1">Name is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                // name="email"
                {...register("email", {required: true})}
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && <span className="font-thin text-red-500 text-start mt-1">Email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                // name="password"
                {...register("password", {required: true,
                   minLength: 6 ,
                   maxLength: 20,
                   pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/})}
                placeholder="password"
                className="input input-bordered"
                autoComplete="true"
              />
              {errors.password?.type === 'required' && <span className="font-thin text-red-500 text-start mt-1">Password is required</span>}
              {errors.password?.type === 'minLength' && <span className="font-thin text-red-500 text-start mt-1">Password must be 6 characters</span>}
              {errors.password?.type === 'MaxLength' && <span className="font-thin text-red-500 text-start mt-1">Password must be less then 20 characters</span>}
              {errors.password?.type === 'pattern' && <span className="font-thin text-red-500 text-start mt-1">Password must have one uppercase, one lowercase, one number and one special character</span>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <p>
              Already registered ? please
              <Link className="text-lg font-bold text-pink-500" to={"/login"}>
                Login
              </Link>
            </p>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn bg-black text-white"
                value={"Sign Up"}
              />
              {/* <button type="submit" className="btn bg-black text-white">
                Sign Up
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
