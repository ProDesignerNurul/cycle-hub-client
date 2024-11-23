import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/authentication/Login/Login";
import Register from "../pages/authentication/Register/Register";
import Bikes from "../pages/Bikes/Bikes/Bikes";
import Contact from "../pages/Contact/Contact";
import Cycles from "../pages/Cycles/Cycles";
import AdminDashboard from "../pages/AdminDashborad/AdminDashboard";
import Users from "../pages/Users/Users";
import AdminHome from "../pages/AdminDashborad/AdminHome";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import UserDashboard from "../pages/UserDashboard/UserDashboard";
import AddCycle from "../pages/Cycles/AddCycle";
import AddBike from "../pages/Bikes/Bikes/AddBike";
import Testimonials from "../pages/Testimonials/Testimonials";
import SingleCycle from "../pages/Cycles/SingleCycle";
import UpdateCycle from "../pages/Cycles/UpdateCycle";
import AddedItems from "../pages/UserDashboard/AddedItems";
import UserProfile from "../pages/Users/UserProfile";
import About from "../pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bikes",
        element: <Bikes />,
      },
      {
        path: "/add-bike",
        element: (
          <PrivateRoute>
            <AddBike />
          </PrivateRoute>
        ),
      },
      {
        path: "/cycles",
        element: <Cycles />,
      },
      {
        path: "/cycles/:id",
        element: <SingleCycle />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cycles/${params.id}`),
      },
      {
        path: "/add-cycle",
        element: (
          <PrivateRoute>
            <AddCycle />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-cycle/:id",
        element: (
          <PrivateRoute>
            <UpdateCycle />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cycles/${params.id}`),
      },
      {
        path: "/testimonials",
        element: <Testimonials />,
      },
      {
        path: "/user-profile",
        element: <UserProfile />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <AdminDashboard />
      </PrivateRoute>
    ),
    children: [
      // admin routes
      {
        path: "admin-home",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <Users />
          </AdminRoute>
        ),
      },
      // user routes
      {
        path: "user-dashboard",
        element: (
          <PrivateRoute>
            <UserDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "added-items",
        element: (
          <PrivateRoute>
            <AddedItems />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
