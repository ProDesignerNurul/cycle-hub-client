import React from "react";
import { useLoaderData } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";

const SingleCycle = () => {
  const singleCycleData = useLoaderData();
  const {
    _id,
    photo,
    name,
    email,
    brand,
    model,
    brakes,
    features,
    description,
    price,
  } = singleCycleData;
  console.log(singleCycleData);
  return (
    <div>
      <div>
        <GoBackButton />
      </div>
      <div className="md:w-1/2 mx-auto px-2 flex justify-center items-center my-8">
        <div className="border hover:shadow-2xl">
          <img src={photo} alt="" />
          <div className="p-4">
            <h2 className="text-2xl font-semibold my-1">
              <span className="text-green-600 font-semibold">Name : </span>
              {name}
            </h2>
            {/* <p className="mb-2">{email}</p> */}
            <p className="mb-2">
              <span className="text-green-600 font-semibold">Brand : </span>
              {brand}
            </p>
            <p className="mb-2">
              <span className="text-green-600 font-semibold">Model : </span>
              {model}
            </p>
            <p className="mb-2">
              <span className="text-green-600 font-semibold">Brake : </span>
              {brakes}
            </p>
            <p className="mb-2">
              <span className="text-green-600 font-semibold">Feature : </span>
              {features}
            </p>
            <p className="mb-2">
              <span className="text-green-600 font-semibold">Price : </span>
              {price}
            </p>
            <p className="mb-2">
              <span className="text-green-600 font-semibold">
                Description :{" "}
              </span>
              {description}
            </p>
            <div className="flex justify-center mt-8">
              <GoBackButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCycle;
