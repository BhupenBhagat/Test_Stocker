import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"; // Import the hamburger menu icon from react-icons

const Navbar5 = () => {
  // State to toggle the visibility of the mobile menu
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="top-0 left-0 w-full z-10 fixed animate">
      {/* Navbar container */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        {/* Logo or brand name */}
        <h3 className="text-white font-bold text-lg">TestStocker</h3>

        {/* Desktop Menu - visible on medium (md) and larger screens */}
        <ul className="hidden md:flex gap-7 text-white">
          <li>
            <a href="#Home" className="cursor-pointer hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#Course" className="cursor-pointer hover:underline">
              Course
            </a>
          </li>
          <li>
            <a href="#About" className="cursor-pointer hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#Contact" className="cursor-pointer hover:underline">
              Contact
            </a>
          </li>
        </ul>

        {/* Login Button - visible only on medium (md) and larger screens */}
        <button className="hidden md:block bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200">
          Login
        </button>

        {/* Hamburger Menu Icon - visible only on smaller screens */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setShowMobileMenu(!showMobileMenu)} // Toggle mobile menu visibility
        >
          <GiHamburgerMenu />
        </div>
      </div>

      {/* Mobile Menu - visible only when Hamburger menu is clicked */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "block" : "hidden" // Show or hide the menu based on state
        } bg-White text black  py-4 px-6`}
      >
        {/* List of menu items for the mobile menu */}
        <ul className="flex flex-col gap-4  justify-end">
          <li>
            <a href="#Home" className="block px-4 py-2 rounded hover:bg-">
              Home
            </a>
          </li>
          <li>
            <a
              href="#Course"
              className="block px-4 py-2 rounded hover:bg-gray-100"
            >
              Course
            </a>
          </li>
          <li>
            <a
              href="#About"
              className="block px-4 py-2 rounded hover:bg-gray-100"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              className="block px-4 py-2 rounded hover:bg-gray-100"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar5;
