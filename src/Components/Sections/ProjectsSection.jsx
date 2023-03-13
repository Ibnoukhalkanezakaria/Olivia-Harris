import React from "react";
import { Link } from "react-router-dom";
import Data from "../../Data/data";

const ProjectsSection = () => {
  return (
    <div className="Wrapper mx-auto b-radius-1 mt-6 b-radius-1">
      {Data.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/${item.id}`}>
              <div className="md:mt-[110px] mt-[50px] bg-color3 b-radius-1">
                <img src={item.image1} alt="" className="b-radius-1" />
                <div className="py-2 px-5 secondary-clr f-1 block">
                  {item.title}
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsSection;
