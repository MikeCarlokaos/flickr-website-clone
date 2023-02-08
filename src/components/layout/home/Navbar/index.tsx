import React from "react";
import logoIcon from "../../../../assets/icons/flickr-logo.png";
import logoTextIcon from "../../../../assets/icons/flickr-text-logo.png";
import searchIcon from "../../../../assets/icons/search-icon.png";

const Navbar = () => {
  const PopupAlert = () => {
    alert("This is only a sample");
  };

  return (
    <nav className="relative w-full h-full grid grid-cols-2 items-center px-6  bg-black/20 text-white md:grid-cols-5 ">
      <div className="w-full h-full">
        <a href="/" className="w-24 h-full flex space-x-1.5 items-center">
          <img
            src={logoIcon}
            alt="Flickr Logo"
            className="h-6 w-6 md:h-[23px] md:w-[23px]"
          />
          <img
            src={logoTextIcon}
            alt="Flickr Logo"
            className="h-6 w-[4.35rem] md:h-[22px]"
          />
        </a>
      </div>
      <div className="hidden  md:block md:col-span-3">
        <form
          action="search-bar"
          className="relative w-full flex bg-white/80 rounded"
        >
          <button
            type="submit"
            className="absolute top-1/2 left-4 -translate-y-1/2 pr-2"
            onClick={PopupAlert}
          >
            <img
              src={searchIcon}
              alt="search icon"
              className="w-[16px] h-[16px]"
            />
          </button>
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Photos, people, or groups"
            className="w-full bg-transparent py-2 pl-12 text-sm text-black placeholder:text-black/60"
          />
        </form>
      </div>
      <div className="w-full flex justify-end capitalize text-base">
        <div>
          <a href="/login" className="px-5 py-2">
            log in
          </a>
        </div>
        <div>
          <a
            href="/signup"
            className="px-5 py-1.5 bg-white text-black font-semibold rounded hover:text-black/60"
          >
            sign up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
