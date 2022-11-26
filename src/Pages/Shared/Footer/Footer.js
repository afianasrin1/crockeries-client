import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import footer1 from "../../../assets/images/footer1.png";
import CrockeriesCollection from "../../../assets/images/CrockeriesCollection.jpg";
const Footers = () => {
  return (
    <div className="">
      <footer
        style={{
          background: `url(${footer1})`,
          backgroundSize: "cover",
        }}
        className="px-4 "
      >
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3 flex justify-center">
            <Link to="/" className="inline-flex items-center mr-8">
              <img
                className="w-24  rounded-full"
                src={CrockeriesCollection}
                alt=""
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase">CONTACT</h3>
              <ul className="space-y-1">
                <li>
                  <Link to="/" className="link link-hover">
                    Branding
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link link-hover">
                    Contact
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/" className="link link-hover">
                    Advertisement
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="tracking-wide uppercase">ABOUT US</h3>
              <ul className="space-y-1">
                <li>
                  {" "}
                  <Link to="/" className="link link-hover">
                    likhte hobe
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link link-hover">
                    likhte hobe
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/" className="link link-hover">
                    likhte hobe
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="uppercase">Social media</div>
              <div className="flex justify-start space-x-3">
                <Link
                  to="/https://www.facebook.com"
                  className="link link-hover"
                >
                  <FaFacebook />
                </Link>
                <Link
                  to="/https://www.facebook.com"
                  rel="noopener noreferrer"
                  title="Twitter"
                  className="text-xl"
                >
                  <FaTwitter />
                </Link>
                <Link
                  to="/https://www.facebook.com"
                  rel="noopener noreferrer"
                  title="Instagram"
                  className=" text-xl"
                >
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center">
          Copyright © 2022 - All right reserved by Crockeries Gallery Ltd.
        </div>
      </footer>
    </div>
  );
};

export default Footers;
