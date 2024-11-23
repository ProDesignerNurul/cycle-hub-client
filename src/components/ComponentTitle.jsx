import React from "react";

const ComponentTitle = ({ mainTitle, subTitle }) => {
  return (
    <div className="my-4">
      <h2 className="text-2xl md:text-3xl text-center font-semibold capitalize">
        {mainTitle}
      </h2>
      <p className="text-center capitalize font-semibold text-green-600 my-2">
        {subTitle}
      </p>
    </div>
  );
};

export default ComponentTitle;
