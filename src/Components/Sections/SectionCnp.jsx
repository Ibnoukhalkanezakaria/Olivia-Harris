import React from "react";
import { AiOutlineDown } from "react-icons/ai";

const SectionCnp = (props) => {
  return (
    <div className="Wrapper mx-auto bg-color3 flex flex-col b-radius-1 md:mt-[120px] mt-[50px] overflow-hidden">
      <span className=" py-4 px-5 bg-color5 primary-clr primary-clr f-2">
        {props.first}
      </span>
      <div className="px-6 w-full gap-4 py-6 flex justify-between items-center">
        <div className="">
          <span className=" bg-color3 b-radius-1 f-2 flex flex-wrap">
            {props.second}
          </span>
        </div>
        <div className="border border-[var(--secondary-clr)] rounded-full p-2">
          <AiOutlineDown className="text-2xl " />
        </div>
      </div>
    </div>
  );
};

export default SectionCnp;
