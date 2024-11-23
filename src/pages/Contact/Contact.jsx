import React from "react";
import { Helmet } from "react-helmet-async";
import contactImg from "../../assets/contact-us-images/1.png";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaLinkedin,
  FaPhone,
  FaPhoneSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Cycle-HUB | Contact</title>
      </Helmet>
      <div className="md:flex justify-center items-center">
        <div className="md:w-1/2">
          <img className="w-full" src={contactImg} alt="" />
        </div>
        <div className="md:w-1/2 p-2">
          <h2 className="text-5xl text-center font-semibold">Contact us</h2>
          <div>
            <p className="text-xl md:text-2xl flex items-center gap-1 my-4">
              <span className="text-yellow-600 mr-2">
                <FaEnvelope />
              </span>
              <span className="text-orange-500 font-semibold">Email : </span>
              <span className="text-green-500">example@email.com</span>
            </p>
            <hr />
            <p className="text-xl md:text-2xl flex items-center gap-1 my-4">
              <span className="text-blue-900 mr-2">
                <FaPhoneSquare />
              </span>
              <span className="text-orange-500 font-semibold">Phone : </span>
              <span className="text-green-500">+880 1764 227126</span>
            </p>
            <hr />
            <p className="text-xl md:text-2xl flex items-center gap-1 my-4">
              <span className="text-blue-600 mr-2">
                <FaFacebookSquare />
              </span>
              <span className="text-orange-500 font-semibold">Facebook : </span>
              <span className="text-blue-500">
                <a href="https://web.facebook.com/mdnurul.amin.rsn">
                  Facebook.com
                </a>
              </span>
            </p>
            <hr />
            <p className="text-xl md:text-2xl flex items-center gap-1 my-4">
              <span className="text-blue-600 mr-2">
                <FaLinkedin />
              </span>
              <span className="text-orange-500 font-semibold">LinkedIn : </span>
              <span className="text-blue-500">
                <a href="https://www.linkedin.com/in/md-nurul-amin-bd/">
                  LinkedIn
                </a>
              </span>
            </p>
            <hr />
            <p className="text-xl md:text-2xl flex items-center gap-1 my-4">
              <span className="text-green-600 mr-2">
                <FaWhatsappSquare />
              </span>
              <span className="text-orange-500 font-semibold">WhatsApp : </span>
              <span className="text-blue-500">
                <a href="https://wa.me/1764227126">Direct Visit</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
