import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../pages/shared/NavBar/NavBar";
import Footer from "../pages/shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="h-16">
        <NavBar />
      </div>
      <div className="min-h-[calc(100vh-380px)]">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
