import React from "react";
import { Helmet } from "react-helmet-async";
import BikeMarquee from "../../../components/BikeMarquee";
import CycleMarquee from "../../../components/CycleMarquee";
import Bikes from "../../Bikes/Bikes/Bikes";
import Cycles from "../../Cycles/Cycles";
import Banner from "./Banner";
import ComponentTitle from "../../../components/ComponentTitle";
import Testimonials from "../../Testimonials/Testimonials";
import Contact from "../../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Cycle-HUB | Home</title>
      </Helmet>
      <div className="md:w-5/12 mx-auto my-4 px-4">
        <ComponentTitle
          mainTitle="welcome to cycle store"
          subTitle="Ride Your World"
        />
        <p className="text-justify">
          Discover premium cycles, gear, and accessories to elevate your
          journey. From the city streets to rugged trails, we’ve got the wheels
          and tools to fuel your adventures.
        </p>
      </div>
      <div>
        <Banner />
      </div>
      <hr />
      <div>
        <BikeMarquee />
      </div>
      <hr />
      <div className="my-8">
        <Bikes />
      </div>
      <hr />
      <div>
        <CycleMarquee />
      </div>
      <hr />
      <div>
        <Cycles />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
