import React, { useContext } from "react";
import loginImg from "../../../assets/login/sign-up-concept-illustration_114360-7865.avif";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  FaUserPlus,
  FaRegEnvelope,
  FaGoogle,
  FaGithub,
  FaImages,
} from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../providers/AuthProviders";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../customHooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
  const { createUser, updateUser, googleLogin } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    // imgBB photo uploading setup
    const imageFile = { image: data?.photo[0] };
    const res = await axiosSecure.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);
    if (res.data?.success) {
      const name = data?.name;
      const email = data?.email;
      const password = data?.password;
      const newUser = {
        name: name,
        email: email,
        photo: res.data?.data?.display_url,
      };
      // const photo = data?.photo;
      createUser(email, password)
        .then(async (result) => {
          const res = await axiosSecure.post("/users", newUser);
          console.log(res.data);
          updateUser(name, newUser.photo)
            .then(() => {})
            .catch((error) => {
              console.error(error.message);
            });
          const loggedUser = result.user;
          console.log(loggedUser);
          Swal.fire({
            title: "Success!",
            text: "Congrats! you are successfully logged In",
            icon: "success",
            confirmButtonText: "OK",
          });
          reset();
          navigate("/");
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  };

  // google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="w-full border rounded-md">
      <Helmet>
        <title>Cycle-HUB | Register</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row">
        <div className="md:w-1/2 mx-auto bg-orange-500">
          <img className="w-full" src={loginImg} alt="" />
        </div>
        <div className="card md:w-1/2 mx-auto md:px-14">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="font-semibold">Name</label>
            <div className="relative">
              <div className="absolute top-2 left-2 text-2xl">
                <FaUserPlus />
              </div>
              <input
                type="text"
                className="w-full bg-gray-200 py-2 pl-12 rounded-sm mb-2"
                placeholder="Enter Name"
                {...register("name", { required: true })}
              />
            </div>
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
            <div className="relative">
              <div className="absolute top-3 left-2 text-2xl">
                <FaImages />
              </div>
              <input
                type="file"
                className="w-full bg-gray-200 py-2 pl-12 rounded-sm mb-2"
                {...register("photo", { required: true })}
              />
            </div>
            <div className="flex justify-center">
              <input
                className="btn btn-outline bg-orange-500 border-none text-white rounded-3xl btn-wide my-3"
                type="submit"
                value="Register"
              />
            </div>
          </form>
          <p className="text-center">
            Already have an account? please{" "}
            <Link className="text-blue-600 font-semibold" to="/login">
              Login
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

export default Register;
