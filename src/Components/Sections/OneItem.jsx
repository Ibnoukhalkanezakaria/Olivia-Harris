import React from "react";
import SectionCnp from "../../Components/Sections/SectionCnp";
import { useParams } from "react-router-dom";
import Data from "../../Data/data";
import SecondCategories from "../DataCnp/SecondCategories";

const OneItem = () => {
  const { oneItem } = useParams();
  const item = Data.find((e) => e.id === oneItem);
  const { title, categories, image1, image2, image3 } = item;
  return (
    <div className="Wrapper mx-auto">
      <SectionCnp first={title} second={<SecondCategories />} />
      <div className="md:mt-[100px] mt-[50px]">
        <div className="mb-6">
          <img className="b-radius-1 w-full" src={image1} alt="" />
        </div>
        <div className="mb-6">
          <img className="b-radius-1 w-full" src={image2} alt="" />
        </div>
        <div className="mb-6">
          <img className="b-radius-1 w-full" src={image3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OneItem;
