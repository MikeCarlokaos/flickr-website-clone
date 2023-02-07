import React from "react";
import logoIcon from "../../../../assets/icons/flickr-logo.png";
import logoTextIcon from "../../../../assets/icons/flickr-text-logo.png";
import searchIcon from "../../../../assets/icons/search-icon.png";
import uploadIcon from "../../../../assets/icons/about/upload-icon.png";

const Navbar = () => {
  return (
    <nav className=" w-full h-full px-6 py-2 flex items-center justify-between bg-black/80 text-white capitalize md:px-10 md:gap-x-60 md:justify-center">
      <div>
        <ul className="flex gap-x-5 whitespace-nowrap md:gap-x-9">
          <li>
            <a href="/" className="w-24 h-full flex space-x-1.5 items-center">
              <img
                src={logoIcon}
                alt="Flickr Logo"
                className=" h-[23px] w-[23px]"
              />
              <img
                src={logoTextIcon}
                alt="Flickr Logo"
                className=" h-[22px] w-[4.35rem]"
              />
            </a>
          </li>
          <li>
            <a
              href="/signup"
              className="bg-sky-500/90 px-5 py-1.5 rounded font-semibold"
            >
              sign up
            </a>
          </li>
          <li>
            <a href="/explore">explore</a>
          </li>
          <li>
            <a href="/prints">prints</a>
          </li>
          <li className="hidden md:block">
            <a href="/get-pro">get pro</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center md:gap-x-5">
        <div className="hidden md:block">
          <form
            action="search-bar"
            className="relative w-56 h-9 flex bg-white/80 rounded"
          >
            <button
              type="submit"
              className="absolute top-1/2 left-3 -translate-y-1/2 pr-2"
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
              className="w-full bg-transparent px-9 text-sm text-black placeholder:text-black/60"
            />
          </form>
        </div>
        <div>
          <ul className="flex items-center gap-x-5">
            <li className="hidden md:block">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={uploadIcon} alt="" className="w-9 h-9" />
              </a>
            </li>
            <li>
              <a href="/login">sign in</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
