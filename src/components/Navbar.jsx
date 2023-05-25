import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

import Translate from './Translate'

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="sticky top-0 bg-white z-50">
      <nav
        className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-50`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo + nombre */}
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <div className="">
              <img src={logo} alt="logo" className=" h-[60px]  " />
            </div>
            <p className="text-black-100 text-[20px] font-bold cursor-pointer">
              LavaJet
            </p>
          </Link>
          {/* Nav */}
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-black-100" : "text-secondary"
                } hover:text-black-100 text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>

          {/* phone Menu */}
          <div className="sm:hidden flex flex-1 justify-center sm-justify-content items-center text-black-100">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } py-8 bg-white absolute top-20 my-2 w-full z-10`}
            >
              <ul className="list-none flex mx-auto items-center flex-col gap-6">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title
                        ? "text-black-100"
                        : "text-secondary"
                    } text-[18px] font-medium`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact button */}
          <Translate/>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

{/* <div className="bg-blue text-white rounded-sm">
<div className="px-8 py-3 cursor-pointer text-[16px]">
  <a href="#contact">Contact</a>
</div>
</div> */}