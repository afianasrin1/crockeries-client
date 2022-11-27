import React from "react";
import { Link } from "react-router-dom";
import { FaRocketchat, FaWhatsapp } from "react-icons/fa";
import useTitle from "../../../hooks/useTitle";
const ContactUs = () => {
  useTitle("ContactUs");
  return (
    <div className="">
      <h1 className="text-2xl text-center font-bold text-yellow-900 pt-8">
        Contact Us
      </h1>
      <div className="grid max-w-screen-xl grid-cols-1  gap-8 sm:px-8 px-3 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 ">
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-4xl font-bold pt-4">
              We'd love to hear from you
            </p>
            <h1 className="text-2xl font-bold pt-8">
              Need Help? <br />
              To get instant response to your query
            </h1>
          </div>

          <div className="flex gap-2 pb-20">
            <Link to="/aboutUs">
              <button className=" btn btn-outline hover:btn-info">
                <FaWhatsapp></FaWhatsapp> Whatsapp
              </button>
            </Link>

            <Link to="/aboutUs">
              <button className=" btn btn-outline hover:btn-info">
                <FaRocketchat /> Live Chat
              </button>
            </Link>
            {/* <Link
              target={"_blank"}
              rel="noopener noreferrer"
              href="https://www.facebook.com/"
              title="Instagram"
              className=" text-xl"
            >
              <FaFacebook />
            </Link> */}
          </div>
        </div>
        <form className="space-y-6 ng-untouched ng-pristine ng-valid">
          <div>
            <label
              htmlFor="name"
              className="text-sm text-gray-800 font-semibold"
            >
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full input input-bordered  p-3 rounded "
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-sm text-gray-800 font-semibold"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="Your Email"
              className="w-full input input-bordered  p-3 rounded "
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-sm text-gray-800 font-semibold"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows="3"
              className="w-full textarea textarea-bordered p-3 rounded "
              placeholder="Say somethings....."
              spellCheck="false"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full input input-bordered  p-3 text-sm text-gray-800 font font-semibold tracking-wide uppercase rounded dark:bg-violet-400 dark:text-gray-900"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
