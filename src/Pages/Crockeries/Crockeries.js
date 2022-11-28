import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import OrderModal from "../Modals/OrderModal/OrderModal";
import CrockeriesCard from "./CrockeriesCard";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";
import { CategoryContext } from "../../Contexts/AuthProvider/AuthProvider";
import ReportModal from "../Dashboard/AllReports/ReportedModal";

const Crockeries = () => {
  const { setCategory } = useContext(CategoryContext);
  const [selectOrder, setSelectOrder] = useState(null);
  const [reported, setReported] = useState(null);
  const params = useParams();
  const crockeries = useLoaderData();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_ApiUrl}categories`).then((res) => {
      setCategories(res.data);
    });
  }, [params?.id]);
  const handleCategory = (category) => {
    setCategory(category);
  };
  console.log(reported);
  return (
    <section className="py-8 ">
      <div className=" border-b flex justify-between pr-2 pb-3 border-gray-200  mb-3 ">
        <p className=" transition-all flex items-center  ">
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
        <select
          onChange={(e) => handleCategory(e.target.value)}
          className="px-3"
          name=""
          id=""
        >
          <option disabled selected>
            Select Category
          </option>{" "}
          {categories?.map((cate) => (
            <option key={cate._id} value={cate?.categoryName}>
              {cate?.name}
            </option>
          ))}{" "}
        </select>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {crockeries.map((crockerie) => (
          <CrockeriesCard
            key={crockerie._id}
            setReported={setReported}
            setSelectOrder={setSelectOrder}
            crockerie={crockerie}
          />
        ))}
      </div>
      {selectOrder && (
        <OrderModal selectOrder={selectOrder} setSelectOrder={setSelectOrder} />
      )}
      {reported && (
        <ReportModal
          reported={reported}
          setReported={setReported}
        ></ReportModal>
      )}
    </section>
  );
};

export default Crockeries;
