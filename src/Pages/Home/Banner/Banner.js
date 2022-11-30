import React from "react";
import { Link } from "react-router-dom";
import banner1 from "../../../Pages/assets/nav&footer/banner1.jpg";
const Banner = () => {
  return (
    <div>
      <section>
        <div className="sm:container flex flex-col justify-center sm:p-6 p-2 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center sm:p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className=" text-xl font-bold leading-none sm:text-2xl">
              Find Love In The Kitchen.Kitchen Is Where You'll Find Peace Of
              Mind.
              <br />
              <span className="dark:text-violet-400"></span> Find Comfort In The
              Kitchen. There's Pure Joy Found In The Kitchen.
            </h1>
            <p className="mt-6 mb-8 md:text-2xl font-semibold text-xl sm:mb-12">
              Chose from wide collection of Crockeries Gallery &
              <br className="hidden md:inline lg:hidden" />
              <span className="lg:pl-2">
                Decorate your Kitchen in your Way.
              </span>
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                to="/signin"
                className="px-8 py-3 text-lg font-semibold rounded text-black-900 hover:text-pink-900"
              >
                Get Shopping with us
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={banner1}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
