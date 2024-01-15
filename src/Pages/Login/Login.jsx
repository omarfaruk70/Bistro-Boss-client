import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../../Providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const [disabled, setDisabled] = useState(true); // initial login button disabled
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const from = location.state?.from?.pathname || '/';
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
    .then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Logged in successFul",
        showConfirmButton: false,
        timer: 1500
      });
     navigate(from, {replace: true})
    });
  };
  const handleValidateCaptcha = (event) => {
    const user_captcha_value = event.target.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Bistro Boss | Login </title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                autoComplete="true"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {/* captcha */}
            <div className="form-control">
              <LoadCanvasTemplate/>
              <input
                onBlur={handleValidateCaptcha}
                name="captcha"
                type="text" 
                placeholder="Write captcha code"
                autoComplete="true"
                className="input input-bordered"
                required
              />
            </div>
            <p>
              New Here ? Create a new
              <Link
                className="text-lg font-bold text-pink-500"
                to={"/register"}
              >
                Account
              </Link>
            </p>
            <div className="form-control mt-6">
              <button
                disabled={disabled}
                type="submit"
                className="btn bg-black text-white"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
