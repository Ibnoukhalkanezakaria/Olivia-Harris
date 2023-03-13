import React from "react";
import heroImage from "../../imgs/hero-img.jpg";
const MainAbout = () => {
  return (
    <div className="Wrapper mx-auto  ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-color3 b-radius-1 md:my-[100px] mt-[50px] p-6">
        <div className="pl-[150px] pt-[120px] relative">
          <span className="absolute left-0 top-0 font-normal f-1 secondary-clr">
            Bio
          </span>
          <img className=" b-radius-1 w-[380px]" src={heroImage} alt="" />
        </div>
        <div>
          <p className="mb-6 text-xl secondary-clr">
            I’m a freelance visual designer with a strong focus on Graphic & Web
            Design, motion design, and visual identity. I'm currently working
            remotely globally from London, UK.
          </p>
          <p className="mb-6 text-xl secondary-clr">
            With attention to detail, my goal is to create meaningful and
            elegant brands and all type of images to communicate ideas. I have
            worked for large and well-known companies, which have given me
            knowledge of how to solve problems quickly and globally.
          </p>
          <div className="mb-6 text-xl secondary-clr">
            So, if you need outstanding brands and images send me an email.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-color3 b-radius-1 md:mt-[100px] mt-[50px] p-6 ">
        <div>
          <h3 className="secondary-clr f-1">Experience</h3>
        </div>
        <div>
          <div className="mb-6">
            <span className="text-xl secondary-clr">
              Graphic and Web Designer
            </span>
            <p className="color4 text-lg">2020–Present</p>
          </div>
          <div className="mb-6">
            <span className="text-xl secondary-clr">Google Design</span>
            <p className="color4 text-lg">2018–2020</p>
          </div>
          <div className="mb-6">
            <span className="text-xl secondary-clr">Microsoft Design</span>
            <p className="color4 text-lg">2016–2018</p>
          </div>
          <div className="mb-6">
            <span className="text-xl secondary-clr">
              Master’s degree in Digital Direction <br /> Royal College of Art,
              UK/span
            </span>
            <p className="color4 text-lg">2014–2016</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-color3 b-radius-1 md:mt-[100px] mt-[50px] p-6 ">
        <div>
          <h3 className="secondary-clr f-1">Selected Clients</h3>
        </div>
        <div>
          <div className="flex flex-col">
            <span className="text-xl secondary-clr">Adidas</span>
            <span className="text-xl secondary-clr">Company Company</span>
            <span className="text-xl secondary-clr">Design Rules</span>
            <span className="text-xl secondary-clr">Google</span>
            <span className="text-xl secondary-clr">Microsoft</span>
            <span className="text-xl secondary-clr">Nike</span>
            <span className="text-xl secondary-clr">+23 others</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-color3 b-radius-1 md:mt-[100px] mt-[50px] p-6 ">
        <div>
          <h3 className="secondary-clr f-1">Awards</h3>
        </div>
        <div>
          <div className="mb-4">
            <span className="text-xl secondary-clr underline">
              3D cover of the year
            </span>
            <p className="text-xl secondary-clr ">2020</p>
          </div>
          <div className="mb-4">
            <span className="text-xl secondary-clr underline">
              Animation excellence award
            </span>
            <p className="text-xl secondary-clr">2019</p>
          </div>
          <div className="mb-4">
            <span className="text-xl secondary-clr underline">Blur Award</span>
            <p className="text-xl secondary-clr">2018</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAbout;
