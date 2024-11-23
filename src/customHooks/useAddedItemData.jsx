import React, { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../providers/AuthProviders";

const useAddedItemData = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const {
    data: addedData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["added-item", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/added-item?email=${user?.email}`);
      return res.data;
    },
  });
  return [addedData, refetch, isLoading];
};

export default useAddedItemData;
