import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import AddButton from "../../components/AddButton";
import { AuthContext } from "../../providers/AuthProviders";
import useAxiosPublic from "../../customHooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import CycleCart from "./CycleCart";
import ComponentTitle from "../../components/ComponentTitle";

const Cycles = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const { data: cycleData = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/cycles");
      console.log(res.data);
      return res?.data;
    },
  });
  return (
    <div className="m-4">
      {user && (
        <div>
          <AddButton
            addIcon={<FaPlus />}
            pathLink={`/add-cycle`}
            title="Add Your Cycle"
          />
        </div>
      )}
      <ComponentTitle mainTitle="Cycle Store" />
      <div className="grid md:grid-cols-3 gap-3 my-4">
        {cycleData.map((item) => (
          <CycleCart key={item._id} item={item} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default Cycles;
