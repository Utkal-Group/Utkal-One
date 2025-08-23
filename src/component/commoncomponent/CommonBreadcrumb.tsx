import React from "react";

type prop = {
  data: {
    cont1: string;
    cont2: string;
    cont3: string;
    cont4: string;
    bgImage?: string; // Optional background image
  };
};

export default function CommonBreadcrumb({ data }: prop) {
  return (
    <div
      className="flex flex-col justify-center items-center h-64 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${data.bgImage})` }} // Apply background image
    >
      {/* Overlay effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="flex gap-3 flex-col text-center relative z-10">
        <h1 className="place-items-center font-serif text-red-500 text-xl font-semibold">
          {data.cont1}
        </h1>

        <h1 className="text-4xl font-sans text-white mt-2">
          {data.cont2}
        </h1>
        <h1 className="text-base font-sans text-gray-300">
          {data.cont3}
        </h1>
        <h1 className="text-base font-sans text-gray-300">
          {data.cont4}
        </h1>
      </div>
    </div>
  );
}
