import React from "react";
import image from "../../../images/icon.png";

const TailwindCard1 = () => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img className="h-12 w-12" src={image} alt="Icon" />
      </div>
      <div>
        <div className="text-xl font-medium text-black">Learn Tailwind</div>
        <p className="text-gray-500">Lorem ipsum dolor sit amet vitae.</p>
      </div>
    </div>
  );
};

export default TailwindCard1;
