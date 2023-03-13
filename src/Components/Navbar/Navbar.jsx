import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="w-full ">
      <div className="sticky top-0 Wrapper py-4 z-50">
        <div className="flex flex-wrap justify-between items-center ">
          <div className="logo bg-primary-clr b-shadow px-6 text-xl py-2 flex items-center justify-center ">
            <Link to="/" className="secondary-clr">
              Olivia Harris
            </Link>
          </div>
          <div className="b-shadow p-2 md:flex">
            <ul className="md:bg-[var(--primary-clr)] bg-color3 md:flex md:items-center absolute md:static left-[0] top-20 hidden ">
              <li className="rounded-full secondary-clr hover:text-[var(--primary-clr)] hover:bg-[var(--secondary-clr)] transition duration-100">
                <Link className="text-xl px-6 py-6 " to="/work">
                  Work
                </Link>
              </li>
              <li className="rounded-full secondary-clr hover:text-[var(--primary-clr)] hover:bg-[var(--secondary-clr)] transition duration-100">
                <Link className="text-xl px-6 py-6  " to="/about">
                  About
                </Link>
              </li>
              <li className="rounded-full secondary-clr hover:text-[var(--primary-clr)] hover:bg-[var(--secondary-clr)] transition duration-100">
                <Link className="text-xl px-6 py-6" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div
            onClick={() => setOpenMenu(!openMenu)}
            className="bg-primary-clr b-shadow px-6 text-xl py-2 menu md:hidden"
          >
            <button>{openMenu ? "Menu" : "Close"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
