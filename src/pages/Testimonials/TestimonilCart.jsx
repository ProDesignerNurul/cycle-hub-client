import React from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const TestimonilCart = ({ item }) => {
  const { image, name, ratings, feedback } = item;
  return (
    <div>
      <div className="w-96 border p-4 shadow-2xl text-center">
        <div className="flex justify-center mb-2">
          <img className="w-40 rounded-full" src={image} alt="" />
        </div>
        <div className="mb-2 flex justify-center">
          <Rating style={{ maxWidth: 180 }} value={ratings} readOnly />
        </div>
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-justify text-gray-500">{feedback}</p>
      </div>
    </div>
  );
};

export default TestimonilCart;
