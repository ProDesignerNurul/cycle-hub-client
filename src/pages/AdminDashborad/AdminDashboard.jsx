import React, { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../customHooks/useAdmin";
import LoadProfileForDashboard from "../../components/LoadProfileForDashboard";
import { AuthContext } from "../../providers/AuthProviders";

const AdminDashboard = () => {
  const [isAdmin] = useAdmin();
  const { user } = useContext(AuthContext);
  return (
    <div className="md:flex">
      <div className="md:w-3/12 bg-base-200">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btn btn-outline btn-sm drawer-button lg:hidden"
            >
              Click To Open SideMenu
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu text-base-content min-h-full w-80 p-4">
              {/* Sidebar content here */}
              {/* {user || (isAdmin && <LoadProfileForDashboard />)} */}
              {isAdmin ? (
                <>
                  <h2 className="text-3xl text-center font-semibold mb-8">
                    Admin Dashboard
                  </h2>
                  <li>
                    <NavLink to="admin-home">Admin Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="users">All Users</NavLink>
                  </li>
                  {/* <li>
                    <NavLink to="added-items">Added Items</NavLink>
                  </li> */}
                </>
              ) : (
                <>
                  <h2 className="text-3xl text-center font-semibold mb-8">
                    User Dashboard
                  </h2>
                  <li>
                    <NavLink to="user-dashboard">User Dashboard</NavLink>
                  </li>
                  <li>
                    <NavLink to="added-items">Added Items</NavLink>
                  </li>
                </>
              )}

              <div className="my-4">
                <hr />
              </div>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cycles">Cycles</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:w-9/12">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
