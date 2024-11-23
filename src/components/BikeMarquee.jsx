import React from "react";
import Marquee from "react-fast-marquee";
import marqueeImg1 from "../assets/bike/bike1.png";
import marqueeImg2 from "../assets/bike/bike2.png";
import marqueeImg3 from "../assets/bike/bike3.png";
import marqueeImg4 from "../assets/bike/bike4.png";
import marqueeImg5 from "../assets/bike/bike5.png";
import marqueeImg6 from "../assets/bike/bike6.png";

const BikeMarquee = () => {
  return (
    <div>
      <Marquee>
        <img className="w-48 m-8" src={marqueeImg1} alt="" />
        <img className="w-48 m-8" src={marqueeImg2} alt="" />
        <img className="w-48 m-8" src={marqueeImg3} alt="" />
        <img className="w-48 m-8" src={marqueeImg4} alt="" />
        <img className="w-48 m-8" src={marqueeImg5} alt="" />
        <img className="w-48 m-8" src={marqueeImg6} alt="" />
      </Marquee>
    </div>
  );
};

export default BikeMarquee;
