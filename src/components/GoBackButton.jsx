import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const GoBackButton = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <button
        onClick={handleGoBack}
        className="btn btn-outline btn-sm btn-wide"
      >
        <span>
          <FaArrowLeft />
        </span>
        <span>Go Back</span>
      </button>
    </div>
  );
};

export default GoBackButton;
