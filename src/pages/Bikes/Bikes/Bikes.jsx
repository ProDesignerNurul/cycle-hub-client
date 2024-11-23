import React, { useContext } from "react";
import useBikes from "../../../customHooks/useBikes";
import BikeCart from "../BikeCart/BikeCart";
import loadingImg from "../../../assets/loading/output-onlinegiftools.gif";
import { Helmet } from "react-helmet-async";
import Loading from "../../Loading/Loading";
import AddButton from "../../../components/AddButton";
import { FaPlus } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProviders";

const Bikes = () => {
  const { user } = useContext(AuthContext);
  const [bike, isLoading, refetch] = useBikes();
  if (isLoading) {
    return <Loading />;
  }

  const trek = bike.filter((item) => item.brand === "Trek");
  const scott = bike.filter((item) => item.brand === "Scott");
  const specialized = bike.filter((item) => item.brand === "Specialized");

  return (
    <div className="m-4">
      <Helmet>
        <title>Cycle-HUB | Cycles</title>
      </Helmet>
      {user && (
        <AddButton
          addIcon={<FaPlus />}
          pathLink={`/add-bike`}
          title="Add Your Bike"
        />
      )}
      <div>
        <h2 className="text-3xl text-center font-semibold my-4">Bike House</h2>
        <div className="grid md:grid-cols-3 gap-2">
          {bike.map((item) => (
            <BikeCart key={item._id} item={item} />
          ))}
        </div>
        {/* <div>
        {trek.map((item) => (
          <div key={item._id}>
            <h2>{item.name}</h2>
            <p>{item.brand}</p>
          </div>
        ))}
      </div> */}
      </div>
    </div>
  );
};

export default Bikes;
