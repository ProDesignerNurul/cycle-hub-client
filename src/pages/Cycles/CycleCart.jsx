import React, { useContext } from "react";
import { FaCartPlus, FaEdit, FaInfoCircle, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../customHooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../customHooks/useAxiosPublic";
import { AuthContext } from "../../providers/AuthProviders";

const CycleCart = ({ item, refetch }) => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { _id, photo, name, email, brand, model, brakes, features, price } =
    item;

  const handleAddToCart = async () => {
    const addedData = {
      name: name,
      email: user?.email,
      brand: brand,
      model: model,
      price: price,
      photo: photo,
    };
    const resAddedItem = await axiosPublic.post("/added-item", addedData);
    console.log(resAddedItem);
    if (resAddedItem.data?.insertedId) {
      refetch();
      console.log(resAddedItem.data);
      Swal.fire({
        title: "Added to Cart!",
        text: "Successfully Added your item to Cart",
        icon: "success",
      });
    }
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/cycles/${id}`);
        console.log(res.data);
        if (res.data?.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          refetch();
        }
      }
    });
  };

  return (
    <div className="border hover:shadow-2xl flex flex-col flex-grow justify-between">
      <img src={photo} alt="" />
      <div className="p-4">
        <h2 className="text-2xl font-semibold my-1">
          <span className="text-green-600 font-semibold">Name : </span>
          {name}
        </h2>
        {/* <p className="mb-2">{email}</p> */}
        <p className="mb-2">
          <span className="text-green-600 font-semibold">Brand : </span>
          {brand}
        </p>
        <p className="mb-2">
          <span className="text-green-600 font-semibold">Model : </span>
          {model}
        </p>
        <p className="mb-2">
          <span className="text-green-600 font-semibold">Brake : </span>
          {brakes}
        </p>
        <p className="mb-2">
          <span className="text-green-600 font-semibold">Feature : </span>
          {features}
        </p>
        <p className="mb-2">
          <span className="text-green-600 font-semibold">Price : </span>${price}
        </p>

        <div className="flex justify-center items-end gap-4 mt-4">
          <button
            title="Edit Your Item"
            className="btn btn-outline  btn-circle text-green-600 font-semibold hover:bg-green-600 hover:text-white hover:border-none"
          >
            <Link to={`/update-cycle/${_id}`}>
              <FaEdit />
            </Link>
          </button>
          {/* <button
            title="Full Information of This Item"
            className="btn btn-outline  btn-circle text-yellow-600 hover:bg-yellow-600 hover:text-white hover:border-none"
          >
            <Link to={`/cycles/${_id}`}>
              <FaInfoCircle />
            </Link>
          </button> */}
          <button
            onClick={() => handleDelete(_id)}
            title="Remove Your Item"
            className="btn btn-outline  btn-circle text-red-600 hover:bg-red-600 hover:text-white hover:border-none"
          >
            <FaTrashAlt />
          </button>
        </div>
        <div className="flex justify-center items-center gap-2 mt-4">
          <button onClick={() => handleAddToCart(item)} className="btn">
            <FaCartPlus /> Add To Cart
          </button>
          <button
            title="Full Information of This Item"
            className="btn text-yellow-600 hover:bg-yellow-600 hover:text-white hover:border-none"
          >
            <Link to={`/cycles/${_id}`}>
              <span className="flex justify-center items-center gap-2">
                <FaInfoCircle /> Information
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CycleCart;
