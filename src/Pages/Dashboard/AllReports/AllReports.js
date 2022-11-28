import { useQuery } from "@tanstack/react-query";
import React from "react";
import useTitle from "../../../hooks/useTitle";
import SmallLoader from "../../Shared/Loader/SmallLoader";

const AllReports = () => {
  useTitle("All Reports");
  const { data: allReports, isLoading } = useQuery({
    queryKey: ["reports"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_ApiUrl}reports`).then((res) => res.json()),
  });
  if (isLoading) {
    return <SmallLoader />;
  }
  console.log(allReports);
  return <div></div>;
};

export default AllReports;
