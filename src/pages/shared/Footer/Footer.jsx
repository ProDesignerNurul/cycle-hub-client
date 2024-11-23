import React from "react";
import logoImg from "../../../assets/logo/logo1.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="my-4 md:mt-10">
      <footer className="footer bg-neutral text-neutral-content p-10">
        <nav>
          <img className="w-20" src={logoImg} alt="" />
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to="/about" className="link link-hover">
            About us
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Terms of use</a>
        </nav>
      </footer>
      <aside className="text-center my-4 font-semibold">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <span className="font-semibold">MD NURUL AMIN</span>
        </p>
      </aside>
    </div>
  );
};

export default Footer;
