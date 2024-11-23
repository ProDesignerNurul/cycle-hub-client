import React from "react";
import useAddedItemData from "../../customHooks/useAddedItemData";
import Loading from "../Loading/Loading";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosPublic from "../../customHooks/useAxiosPublic";
import Swal from "sweetalert2";

const AddedItems = () => {
  const [addedData, refetch, isLoading] = useAddedItemData();
  const axiosPublic = useAxiosPublic();
  if (isLoading) {
    return <Loading />;
  }
  console.log(addedData);

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
        const res = await axiosPublic.delete(`/added-item/${id}`);
        console.log(res.data);
        if (res.data?.deletedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "successfully Deleted your Item",
            icon: "success",
            confirmButtonText: "OK",
          });
          refetch();
        }
      }
    });
  };

  return (
    <div>
      <h2 className="text-3xl text-center font-semibold my-4">
        Your Total Added Items :{" "}
        <span className="text-green-600">{addedData.length}</span>
      </h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {addedData.map((item) => (
                <tr className="hover" key={item._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item?.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item?.name}</td>
                  <td>{item?.brand}</td>
                  <td>{item?.model}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-circle text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
                    >
                      <FaTrashAlt />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddedItems;
