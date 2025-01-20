import React from "react";
import Navbar5 from "./Navbar/Navbar5";
//import Navbar from "./Navbar/Navbar";
//import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <Navbar5 />
      <div className="container text-left mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
        <h2 className="text-5xl sm:text-4.5xl md:text-[60px] inline-block max-w-3xl font-semibold pt-20">
          Bridge your gap between learning and achievement!!
        </h2>

        <div className="space-x-6 mt-8">
          <a href="./Registration/Registration1" className="border border-white bg-Cyan-#cffafe px-8 py-3 rounded ">
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
