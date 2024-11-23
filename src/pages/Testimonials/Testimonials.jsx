import React from "react";
import useAxiosPublic from "../../customHooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import TestimonilCart from "./TestimonilCart";
import Marquee from "react-fast-marquee";
import ComponentTitle from "../../components/ComponentTitle";

const Testimonials = () => {
  const axiosPublic = useAxiosPublic();
  const { data: testimonials = [] } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const res = await axiosPublic.get("/testimonials");
      console.log(res.data);
      return res.data;
    },
  });
  console.log(testimonials);
  return (
    <div>
      <div className="my-8">
        <ComponentTitle
          mainTitle="Testimonials"
          subTitle="Trusted by Our Clients, Proven by Results"
        />
      </div>
      <Marquee
        pauseOnHover={true}
        speed={40}
        gradient={true}
        gradientWidth={40}
      >
        <div className="flex flex-wrap gap-8">
          {testimonials.map((item) => (
            <TestimonilCart key={item._id} item={item} />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Testimonials;
