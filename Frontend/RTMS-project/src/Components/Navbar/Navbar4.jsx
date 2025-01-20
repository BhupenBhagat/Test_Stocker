import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar4 = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        {/* <img src="" alt="" /> */}
        <h3 className="text-white font-bold text-lg">TestStocker</h3>
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:underline-offset-4">
            Home
          </a>
          <a href="#Course" className="cursor-pointer" hover:text-grey-400>
            Course
          </a>
          <a href="#About" className="cursor-pointer" hover:text-grey-400>
            About
          </a>
          <a href="#Contact" className="cursor-pointer" hover:text-grey-400>
            Contact
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign in
        </button>
        {/* <GiHamburgerMenu  color="white"/> */}

        {/* <img src ={assets.menu_icon} alt="" /> */}
      </div>
      {/* -------------------mobile-menu---------------- */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full " : "h-0 w-0"
        } 0right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="md:hidden ${showMobileMenu ? 'fixed w-full':'h-0 w-0 right'} bg-transparent">
          <GiHamburgerMenu color="white" />
        </div>
        <ul className="flex flex-col items-right gap-2 mt-5 px-5 text-lg font-medium">
          <a
            href="#Header"
            className="px-4 py2 rounded-full incline-block text-white"
          >
            Home
          </a>
          <a
            href="#Course"
            className="px-4 py2 rounded-full incline-block text-white"
          >
            Course
          </a>
          <a
            href="#About"
            className="px-4 py2 rounded-full incline-block text-white"
          >
            About
          </a>
          <a
            href="#Contact"
            className="px-4 py2 rounded-full incline-block text-white"
          >
            Contact
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar4;




