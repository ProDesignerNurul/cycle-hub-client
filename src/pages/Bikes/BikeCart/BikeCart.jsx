import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BikeCart = ({ item }) => {
  // console.log(item);
  const { _id, name, price, image, company_name, category, brand } = item;
  return (
    <div className="card bg-base-100 w-96 shadow-xl border">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name : {name}</h2>
        <p>Brand : {brand}</p>
        <p>Category : {category}</p>
        <p>Company Name : {company_name}</p>
        <p>Price : {price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-circle">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BikeCart;
