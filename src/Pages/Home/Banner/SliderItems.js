import React from "react";
import { Link } from "react-router-dom";
import "./SliderItems.css";

const SliderItems = ({ slider }) => {
  const { image, id, prev, next } = slider;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} alt="" className="w-full rounded-xl" />
      </div>

      <div className="absolute flex justify-between transform  -translate-y-1/2  left-24 right-24 top-1/4">
        <div>
          <h2 className="text-3xl text-white w-1/2">
            Browse and buy essential crockery
            <br /> of your choice at low prices
          </h2>
          <div className=" w-1/2">
            <Link to="/aboutUs">
              <button className=" btn btn-outline hover:btn-info">
                About Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex justify-between transform -translate-y-1/2  right-5 left-5 top-1/2">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default SliderItems;
