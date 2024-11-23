import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import useAxiosSecure from "../../customHooks/useAxiosSecure";
import Swal from "sweetalert2";
import Loading from "../Loading/Loading";
import { AuthContext } from "../../providers/AuthProviders";
import { FaUserCheck } from "react-icons/fa";

const Users = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }

  const handleMakeAdmin = async (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to make admin him!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Admin him!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.patch(`/users/admin/${user._id}`);
        console.log(res.data);
        if (res.data?.modifiedCount) {
          refetch();
          Swal.fire({
            title: "Success!",
            text: `${user?.name} Admin now!`,
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      }
    });
  };

  console.log(users);

  return (
    <div>
      <h2 className="text-4xl text-center font-semibold my-4">All Users :</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr className="hover" key={user._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={user?.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-semibold">{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      <p className="flex items-center font-semibold">
                        <span className="mr-1 text-lg text-blue-600">
                          <FaUserCheck />
                        </span>
                        <span>Admin</span>
                      </p>
                    ) : (
                      <button
                        className="btn btn-outline rounded-lg btn-sm"
                        onClick={() => handleMakeAdmin(user)}
                      >
                        Admin
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
