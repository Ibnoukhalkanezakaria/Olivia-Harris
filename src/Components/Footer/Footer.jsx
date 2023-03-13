import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-color3 mt-[120px] p-[30px] rounded-t-[30px]">
      <div className="Wrapper mx-auto">
        <div className="flex flex-wrap justify-start">
          <span className="mr-auto text-xl pb-6">
            © Olivia 2023 Ibnoukhalkane
          </span>
          <ul className="flex mb-6 flex-col md:flex-row">
            <li className="ml-4">
              <a
                target="_blank"
                href="olivia.gmail.com"
                className="text-xl hover:underline"
              >
                Email
              </a>
            </li>
            <li className="ml-4">
              <a
                target="_blank"
                href="https://www.instagram.com/"
                className="text-xl hover:underline"
              >
                Instagram
              </a>
            </li>
            <li className="ml-4">
              <a
                target="_blank"
                href="https://www.linkedin.com/"
                className="text-xl hover:underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <hr className="hr" />
        <div className="block sm:flex justify-between my-10 ">
          <div className="flex flex-col mb-4">
            <Link to="/work" className="secondary-clr text-xl hover:underline">
              Work
            </Link>
            <Link to="/about" className="secondary-clr text-xl hover:underline">
              About
            </Link>
            <Link
              to="/contact"
              className="secondary-clr text-xl hover:underline"
            >
              Contact
            </Link>
            <Link to="/404" className="secondary-clr text-xl hover:underline">
              404
            </Link>
          </div>
          <div>
            <span className="secondary-clr text-xl">
              Designed by{" "}
              <span className="underline">
                <a target="_blank" href="https://www.diogoferreira.com/">
                  Diogo Ferreira
                </a>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
