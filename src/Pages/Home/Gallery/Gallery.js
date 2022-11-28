import React from "react";
import img1 from "../../assets/slider/slider1.jpg";
import img2 from "../../assets/slider/slider2.jpg";
import img3 from "../../assets/slider/slider3.jpg";
import img4 from "../../assets/slider/slider4.jpg";
import img5 from "../../assets/slider/slider5.jpg";
import img6 from "../../assets/slider/slider6.jpg";
import img7 from "../../assets/slider/slider7.jpg";
import img8 from "../../assets/slider/slider8.jpg";
import img9 from "../../assets/slider/slider9.jpg";
import img10 from "../../assets/slider/slider10.jpg";
import img11 from "../../assets/slider/slider11.jpg";
import img12 from "../../assets/slider/slider12.jpg";

import PhotoAlbum from "react-photo-album";
const Gallery = () => {
  const photos = [
    {
      src: img1,
      width: 800,
      height: 600,
    },
    {
      src: img2,
      width: 800,
      height: 600,
    },
    {
      src: img3,
      width: 800,
      height: 600,
    },
    {
      src: img4,
      width: 800,
      height: 600,
    },
    {
      src: img5,
      width: 800,
      height: 600,
    },
    {
      src: img6,
      width: 800,
      height: 600,
    },
    {
      src: img7,
      width: 800,
      height: 600,
    },
    {
      src: img8,
      width: 800,
      height: 600,
    },
    {
      src: img9,
      width: 800,
      height: 600,
    },
    {
      src: img10,
      width: 800,
      height: 600,
    },
    {
      src: img11,
      width: 800,
      height: 600,
    },
    {
      src: img12,
      width: 800,
      height: 600,
    },
  ];
  return (
    <section className="pb-12 border-b border-gray-300 pt-5">
      <h1 className="sm:text-3xl text-xl font-semibold pl-4 pb-6 ">
        Crockeries-Gallery
      </h1>

      <PhotoAlbum layout="columns" photos={photos} />
    </section>
  );
};

export default Gallery;
