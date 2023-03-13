import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="bg-color3 Wrapper mx-auto b-radius-1 mt-6">
      <div className="bg-color5 py-4 px-5 b-radius-1 h-[600px]">
        <div className="flex justify-between w-full">
          <div className="">
            <h1 className="primary-clr f-1">Page Not Found — 404</h1>
          </div>
        </div>
      </div>
      <span className="py-2 px-5 secondary-clr f-1 block ">
        It's time to go back{" "}
        <Link to="/" className="underline">
          home
        </Link>
      </span>
    </div>
  );
};

export default Error;
