import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import OrderModal from "../Modals/OrderModal/OrderModal";
import FurnitureCard from "./CrockeriesCard";
import { IoIosArrowForward } from "react-icons/io";

const Crockeries = () => {
  const [selectOrder, setSelectOrder] = useState(null);
  const crockeries = useLoaderData();
  return (
    <section className="py-8">
      <p className="pb-1 mb-3 transition-all border-b border-gray-200 flex items-center  ">
        <Link
          className="hover:border-b border-white border-b hover:border-gray-900 "
          to="/"
        >
          Home
        </Link>{" "}
        <span>
          <IoIosArrowForward />
        </span>{" "}
        <span className="hover:border-b border-b border-white hover:border-gray-900  ">
          {crockeries[3].name}
        </span>
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {crockeries.map((crockerie) => (
          <FurnitureCard
            key={crockerie._id}
            setSelectOrder={setSelectOrder}
            crockerie={crockerie}
          />
        ))}
      </div>
      {selectOrder && (
        <OrderModal selectOrder={selectOrder} setSelectOrder={setSelectOrder} />
      )}
    </section>
  );
};

export default Crockeries;
