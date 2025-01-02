import React from "react";
import { ring } from "ldrs";

const LoadingSpinner = () => {
  ring.register();
  return (
    <div className="w-full h-full flex justify-center items-center">
      <l-ring
        size="30"
        stroke="2"
        bg-opacity="0"
        speed="2"
        color="black"
      ></l-ring>
    </div>
  );
};

export default LoadingSpinner;
