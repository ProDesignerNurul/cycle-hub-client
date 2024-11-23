import React, { useContext } from "react";
import loginImg from "../../../assets/login/sign-up-concept-illustration_114360-7865.avif";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle, FaRegEnvelope } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../providers/AuthProviders";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const onSubmit = (data) => {
    const email = data?.email;
    const password = data?.password;
    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          title: "Congrats!",
          text: "You are successfully logged In",
          icon: "success",
          confirmButtonText: "OK",
        });
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error.mesage);
      });
  };

  const from = location.state?.from?.pathname || "/";

  // google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="w-full border rounded-md">
      <Helmet>
        <title>Cycle-HUB | Login</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="bg-orange-500 md:w-1/2 mx-auto">
          <img className="w-full" src={loginImg} alt="" />
        </div>
        <div className="card md:w-1/2 mx-auto md:px-14">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="font-semibold">Email</label>
            <div className="relative">
              <div className="absolute top-2 left-2 text-2xl">
                <FaRegEnvelope />
              </div>
              <input
                type="email"
                className="w-full bg-gray-200 py-2 pl-12 rounded-sm mb-2"
                placeholder="Enter Email"
                {...register("email", { required: true })}
              />
            </div>
            <label className="font-semibold">Password</label>
            <div className="relative">
              <div className="absolute top-2 left-2 text-2xl">
                <MdPassword />
              </div>
              <input
                type="password"
                className="w-full bg-gray-200 py-2 pl-12 rounded-sm mb-2"
                placeholder="Enter Password"
                {...register("password", { required: true })}
              />
            </div>
            <div className="flex justify-center">
              <input
                className="btn btn-outline bg-orange-500 border-none text-white rounded-3xl btn-wide my-3"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p className="text-center">
            New User? please{" "}
            <Link className="text-blue-600 font-semibold" to="/register">
              Register
            </Link>
          </p>
          <div className="flex gap-3 justify-center my-2">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-circle btn-outline border-orange-500 text-3xl"
            >
              <FaGoogle />
            </button>
            <button className="btn btn-circle btn-outline border-orange-500 text-3xl">
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
