import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const AddButton = ({ title, pathLink, addIcon }) => {
  return (
    <div className="flex justify-center items-center my-4">
      <button className="btn btn-outline btn-sm btn-wide">
        <Link className="flex justify-center items-center gap-2" to={pathLink}>
          <span>{addIcon}</span>
          <span>{title}</span>
        </Link>
      </button>
    </div>
  );
};

export default AddButton;
