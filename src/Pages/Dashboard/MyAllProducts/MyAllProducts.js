import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";
import SmallLoader from "../../Shared/Loader/SmallLoader";
import { BsTrash } from "react-icons/bs";
import { FcAdvertising } from "react-icons/fc";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import axios from "axios";

const MyAllProducts = () => {
  const { user, setLoading } = useContext(AuthContext);
  useTitle("My All Products");
  const [removeCardProduct, setRemoveCardProduct] = useState(null);
  const {
    data: myProducts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["crockeries/seller"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_ApiUrl}crockeries/seller/${user?.email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("access-token")}`,
        },
      }).then((res) => res.json()),
  });

  const handleRemoveProduct = () => {
    setLoading(true);
    fetch(
      `${process.env.REACT_APP_ApiUrl}crockeries/seller/${removeCardProduct?._id}?email=${user?.email}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("access-token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          setLoading(false);
          toast.success(`${removeCardProduct?.name} deleted successfully.`, {
            duration: 3000,
          });
          refetch();
        }
      });
  };
  const closeModal = () => {
    setRemoveCardProduct(null);
  };
  const handleAdvertise = (id) => {
    setLoading(true);
    axios
      .put(`${process.env.REACT_APP_ApiUrl}crockeries/${id}`, {
        Status: "Approved",
      })
      .then((res) => {
        console.log(res);
        if (res.data?.acknowledged) {
          setLoading(false);
          refetch();
        }
      });
  };
  if (isLoading) {
    return <SmallLoader />;
  }
  return (
    <div>
      {myProducts?.length > 0 ? (
        <>
          <h1 className="text-3xl font-bold pb-5">
            My All Products: {myProducts?.length}
          </h1>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Product</th>
                  <th>Status</th>
                  <th>Advertise</th>
                  <th>Category</th>
                  <th> OriginalPrice</th>
                  <th>ResalePrice</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {myProducts.map((crockerie, idx) => (
                  <tr key={crockerie._id}>
                    <th> {idx + 1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              title="product image"
                              src={crockerie?.picture}
                              alt="Avatar"
                            />
                          </div>
                        </div>
                        <div>
                          <div title="product Name" className="font-bold">
                            {crockerie?.name}
                          </div>
                          <div
                            title="Seller Email"
                            className="text-sm opacity-50"
                          >
                            {crockerie?.sellerEmail}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <small className="font-semibold">
                        {" "}
                        {crockerie?.Status}
                      </small>
                    </td>
                    <td>
                      {crockerie?.Status === "Available" ? (
                        <button
                          title="Advertise "
                          className="btn btn-sm"
                          onClick={() => handleAdvertise(crockerie?._id)}
                        >
                          <FcAdvertising className=" text-2xl" />
                        </button>
                      ) : (
                        <button
                          title="Advertise Approved"
                          disabled
                          className="btn btn-sm"
                        >
                          <FcAdvertising className=" text-2xl" />
                        </button>
                      )}
                    </td>
                    <td> {crockerie?.categoryName}</td>
                    <td> ${crockerie?.originalPrice}</td>
                    <td> ${crockerie?.reSalePrice}</td>
                    <td>
                      {" "}
                      <label htmlFor="confirm-modal">
                        <BsTrash
                          title="remove product"
                          onClick={() => setRemoveCardProduct(crockerie)}
                          className="cursor-pointer text-red-500 text-lg"
                        />
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {removeCardProduct && (
            <ConfirmationModal
              successAction={handleRemoveProduct}
              closeModal={closeModal}
              title={`Are you sure You want to delete?`}
              message={`If you want to delete "${removeCardProduct.name}". It can't be recover.`}
            />
          )}
        </>
      ) : (
        <h1 className="sm:text-4xl text-2xl lg:pt-12 text-center lg:text-left pt-10 lg:pl-8 font-semibold text-red-500">
          Product were are not Found !
        </h1>
      )}
    </div>
  );
};

export default MyAllProducts;
