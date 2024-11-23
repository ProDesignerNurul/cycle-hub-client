import React from "react";
import { useForm } from "react-hook-form";
import GoBackButton from "../../../components/GoBackButton";
import ComponentTitle from "../../../components/ComponentTitle";
import addImage from "../../../assets/bike/bike1.png";
import { FaUserPlus } from "react-icons/fa";

const AddBike = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <GoBackButton />
      <div>
        <ComponentTitle mainTitle="Add Your Bike" />
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex justify-center items-center p-4">
            <div className="md:w-1/2">
              <img className="w-11/12" src={addImage} alt="" />
            </div>
            <div className="md:w-1/2">
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
              <div className="flex justify-center">
                <input
                  className="btn btn-outline bg-orange-500 border-none text-white rounded-3xl btn-wide my-3"
                  type="submit"
                  value="Add Cycle"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBike;
