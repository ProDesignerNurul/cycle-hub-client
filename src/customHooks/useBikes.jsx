import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useBikes = () => {
  const axiosSecure = useAxiosSecure();
  const {
    isLoading,
    refetch,
    data: bike = [],
  } = useQuery({
    queryKey: ["bike"],
    queryFn: async () => {
      const res = await axiosSecure.get("/bikes");
      return res.data;
    },
  });

  return [bike, isLoading, refetch];
};

export default useBikes;
