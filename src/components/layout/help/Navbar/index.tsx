import React from "react";
import logo from "../../../../assets/icons/flickr-black-logo.png";

const Navbar = () => {
  return (
    <nav className="w-full h-full flex justify-between items-center py-4 px-16">
      <div>
        <img src={logo} alt="Flickr Black Logo" className="w-full h-9" />
      </div>
      <div>
        <a href="blank" className="text-blue-700 capitalize">
          contact us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
