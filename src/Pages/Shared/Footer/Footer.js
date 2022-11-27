import React from "react";
import { Link } from "react-router-dom";

import footer1 from "../../assets/nav&footer/footer1.png";
import CrockeriesCollection from "../../assets/nav&footer/CrockeriesCollection.jpg";
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
          <div className="lg:w-1/2 flex justify-center">
            <Link to="/" className="inline-flex items-center mr-8">
              <img
                className="w-32 rounded-full"
                src={CrockeriesCollection}
                alt=""
              />
            </Link>
          </div>

          <div className="grid grid-cols-3 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-2 sm:pl-20">
            <div>
              <h1 className="text-xl text-yellow-900"> Registered Office:</h1>
              <p className="text-sm text-justify text-gray">
                Crockeries gallery Ltd.| c-47, 1st Floor, Middle Circle,
                Connaught Place, Dhaka-1202, Bangladesh, Support-729006| CIN:
                U27205DL20 Crockeries gallery Ltd. is ISO 2702 Compliance
                Certified. Person who may be contacted in case of any compliance
                related queries or grievances :imad (imad@gmail.com) ** All
                product names, logos, and brands are property of their
                respective owners. All company, product and service names used
                in this website are for identification purposes only. Use of
                these names, logos, and brands does not imply endorsement.
              </p>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center">
          Copyright © 2022 Crockeries Gallery Ltd All right reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footers;
