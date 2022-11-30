import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import SmallLoader from "../../Shared/Loader/SmallLoader";
import { BsTrash } from "react-icons/bs";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import useTitle from "../../../Hooks/useTitle";

const AllProducts = () => {
  const { user } = useContext(AuthContext);
  useTitle("All Products");
  const [removeProduct, setRemoveProduct] = useState(null);
  const {
    data: crockeries,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["crockeries", user?.email],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_ApiUrl}crockeries`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("access-token")}`,
        },
      }).then((res) => res.json()),
  });
  const handleRemoveProduct = () => {
    fetch(
      `${process.env.REACT_APP_ApiUrl}crockeries/${removeProduct?._id}?email=${user?.email}`,
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
          toast.success(`${removeProduct?.name} deleted successfully.`, {
            duration: 3000,
          });
          refetch();
        }
      });
  };
  const closeModal = () => {
    setRemoveProduct(null);
  };

  if (isLoading) {
    return <SmallLoader />;
  }
  return (
    <div>
      <h1 className="text-3xl font-bold pb-5">
        All Products: {crockeries?.length}
      </h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Products</th>
              <th>Status</th>
              <th>Category</th>
              <th> OriginalPrice</th>
              <th>ResalePrice</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {crockeries.map((crockerie, idx) => (
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
                      <div title="Seller Email" className="text-sm opacity-50">
                        {crockerie?.sellerEmail}
                      </div>
                    </div>
                  </div>
                </td>
                <td> {crockerie?.Status}</td>
                <td> {crockerie?.categoryName}</td>
                <td> ${crockerie?.originalPrice}</td>
                <td> ${crockerie?.reSalePrice}</td>
                <td>
                  {" "}
                  <label htmlFor="confirm-modal">
                    <BsTrash
                      title="remove product"
                      onClick={() => setRemoveProduct(crockerie)}
                      className="cursor-pointer text-red-500 text-lg"
                    />
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {removeProduct && (
        <ConfirmationModal
          successAction={handleRemoveProduct}
          closeModal={closeModal}
          title={`Are you sure You want to delete?`}
          message={`If you want to delete "${removeProduct.name}". It can't be recover.`}
        />
      )}
    </div>
  );
};

export default AllProducts;
