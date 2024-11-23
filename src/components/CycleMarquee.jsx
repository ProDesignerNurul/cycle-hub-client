import React from "react";
import Marquee from "react-fast-marquee";
import cycleImg1 from "../assets/cycle/1.png";
import cycleImg2 from "../assets/cycle/2.png";
import cycleImg3 from "../assets/cycle/3.png";
import cycleImg4 from "../assets/cycle/4.png";
import cycleImg5 from "../assets/cycle/5.png";
import cycleImg6 from "../assets/cycle/6.png";
import cycleImg7 from "../assets/cycle/7.png";
import cycleImg8 from "../assets/cycle/8.png";
import cycleImg9 from "../assets/cycle/9.png";
import cycleImg10 from "../assets/cycle/10.png";

const CycleMarquee = () => {
  return (
    <div>
      <Marquee>
        <img className="w-48 m-8" src={cycleImg1} alt="" />
        <img className="w-48 m-8" src={cycleImg2} alt="" />
        <img className="w-48 m-8" src={cycleImg3} alt="" />
        <img className="w-48 m-8" src={cycleImg4} alt="" />
        <img className="w-48 m-8" src={cycleImg5} alt="" />
        <img className="w-48 m-8" src={cycleImg6} alt="" />
        <img className="w-48 m-8" src={cycleImg7} alt="" />
        <img className="w-48 m-8" src={cycleImg8} alt="" />
        <img className="w-48 m-8" src={cycleImg9} alt="" />
        <img className="w-48 m-8" src={cycleImg10} alt="" />
      </Marquee>
    </div>
  );
};

export default CycleMarquee;
