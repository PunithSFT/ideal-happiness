import React from "react";
import Logo from "../assets/Brain_Tech__1_-removebg-preview.png";

const Header = () => {
  return (
    <header className=" py-8 ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={Logo} alt="" className="w-[120px] h-[120px]" />
          </a>
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
