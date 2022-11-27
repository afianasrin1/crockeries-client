import React from "react";

import about1 from "../../assets/imgAbout/about1.png";
import about2 from "../../assets/imgAbout/about2.png";
import useTitle from "../../../hooks/useTitle";
const AboutUs = () => {
  useTitle("AboutUs");
  return (
    <div className="my-20 mx-auto px-5">
      <div className=" py-4">
        <h5 className="text-yellow-900 pb-4 text-4xl text-center font-bold">
          About Us
        </h5>
        <p className=" pb-4 text-2xl text-center font-bold">
          When it comes to Crockeries , we’re the only one place that does it
          all. At Crockeries, you get
        </p>
      </div>

      <div className="lg:flex gap-10">
        <div className="lg:w-1/2 py-4">
          <h1 className="md:text-justify lg:pt-28 text-xl">
            {" "}
            The IDEA originated in 2019
          </h1>
          <p className="md:text-justify lg:pt-4 text-lg">
            When one of 5 friends wanted to buy the Crockeries, he tried to sell
            off his then-current Crockeries for funding but found it difficult
            to do so.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img className="rounded-xl " src={about1} alt="" />
        </div>
      </div>
      <div className="lg:flex gap-10">
        <div className="lg:w-1/2 py-4">
          <h1 className="md:text-justify lg:pt-28 text-xl">
            {" "}
            From 1 Room to 2 Office From 3 people to 100 People
          </h1>
          <p className="md:text-justify lg:pt-4 text-lg">
            We are now a team of 100 PASSIONATE folks who are DEDICATED to help
            you keep your crockeries (the most important thing in your life)
            forever healthy & UP-TO-DATE.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img className="rounded-md " src={about2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
