import React from "react";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

function Navbar({ isOpen, setIsOpen }) {
  return (
    <nav className="relative z-50 flex items-center justify-between mx-auto bg-Neutral-White max-w-7xl p-9">
      <div>
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className=" max-lg:hidden">
        <ul className="flex items-center justify-center gap-9 text-Neutral-GrayishBlue">
          <li className="pb-5 cursor-pointer hover:text-Primary-DarkBlue hover:border-b-4 border-Primary-LimeGreen">
            Home
          </li>
          <li className="pb-5 cursor-pointer hover:text-Primary-DarkBlue hover:border-b-4 border-Primary-LimeGreen">
            About
          </li>
          <li className="pb-5 cursor-pointer hover:text-Primary-DarkBlue hover:border-b-4 border-Primary-LimeGreen">
            Contact
          </li>
          <li className="pb-5 cursor-pointer hover:text-Primary-DarkBlue hover:border-b-4 border-Primary-LimeGreen">
            Blog
          </li>
          <li className="pb-5 cursor-pointer hover:text-Primary-DarkBlue hover:border-b-4 border-Primary-LimeGreen">
            Careers
          </li>
        </ul>
      </div>
      <div className="max-lg:hidden">
        <button className="px-5 py-3 font-bold rounded-full bg-gradient-to-r from-Primary-LimeGreen to-Primary-BrightCyan hover:opacity-50 text-Neutral-White">
          Request invite
        </button>
      </div>
      <div className="flex items-center justify-center lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <img src={close} alt="menubar" />
          ) : (
            <img src={hamburger} alt="menubar" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="absolute py-6 rounded-lg w-60 h-80 top-28 right-10 bg-Neutral-White">
          <ul className="flex flex-col items-center justify-between w-full h-full text-center text-Primary-DarkBlue">
            <li className="w-full pb-5 cursor-pointer hover:border-b-4 border-Primary-LimeGreen">
              Home
            </li>
            <li className="w-full pb-5 cursor-pointer hover:border-b-4 border-Primary-LimeGreen">
              About
            </li>
            <li className="w-full pb-5 cursor-pointer hover:border-b-4 border-Primary-LimeGreen">
              Contact
            </li>
            <li className="w-full pb-5 cursor-pointer hover:border-b-4 border-Primary-LimeGreen">
              Blog
            </li>
            <li className="w-full pb-5 cursor-pointer hover:border-b-4 border-Primary-LimeGreen">
              Careers
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
