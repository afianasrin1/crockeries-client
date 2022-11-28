import React from "react";

const SmallLoader = () => {
  return (
    <div>
      <div className="">
        <div
          className="border-dashed border-lime-700  animate-spin inline-block w-10 h-10 border-4 rounded-full"
          role="status"
        ></div>
      </div>
    </div>
  );
};

export default SmallLoader;
