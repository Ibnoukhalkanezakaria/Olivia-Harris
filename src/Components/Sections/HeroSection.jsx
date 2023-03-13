import React from "react";
import heroImage from "../../imgs/hero-img.jpg";

const HeroSection = () => {
  return (
    <div className="bg-color3 Wrapper mx-auto b-radius-1 mt-6">
      <div className="bg-color5 py-4 px-5 b-radius-1">
        <div className="flex flex-wrap gap-4 justify-between w-full">
          <div className="">
            <h1 className="primary-clr f-1 md:leading-[55px]">
              Graphic <br /> & Web Designer
            </h1>
          </div>
          <div className="">
            <img
              src={heroImage}
              alt=""
              className="b-radius-1 md:h-[600px] md:w-[380px]"
            />
          </div>
        </div>
        <div>
          <p className="primary-clr f-2 pt-6 md:leading-[55px]">
            Creative mind based in London and working <br /> globally remotely
          </p>
        </div>
      </div>
      <span className="py-2 px-5 secondary-clr f-1 block">Selected Work</span>
    </div>
  );
};

export default HeroSection;
