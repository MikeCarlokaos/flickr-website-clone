import React from "react";
import bgHeader from "../../../../assets/images/developers/header-home.png";

const Menubar = () => {
  return (
    <section className="w-full h-full mx-auto mt-16 md:w-[975px]">
      <div
        style={{ backgroundImage: `url(${bgHeader})` }}
        className="relative w-full h-40 bg-cover bg-no-repeat mt-20 shadow-inner"
      >
        <div className="absolute bottom-0 w-full px-5 py-3">
          <h1 className="w-96 h-full text-5xl text-white font-semibold tracking-tight capitalize">
            the flickr developer guide
          </h1>
        </div>
      </div>
      <nav className="w-full h-full flex justify-between text-sm py-3 px-5 md:px-0">
        <ul className="flex divide-x divide-black">
          <li className="pr-3">
            <a href="blank" className="hover:text-blue-700">
              Home
            </a>
          </li>
          <li className="px-3 text-center">
            <a href="blank" className="hover:text-blue-700">
              API
            </a>
          </li>
          <li className="px-3 text-center">
            <a href="blank" className="hover:text-blue-700">
              Community
            </a>
          </li>
          <li className="px-3 text-center">
            <a href="blank" className="hover:text-blue-700">
              Business
            </a>
          </li>
          <li className="px-3 text-center">
            <a href="blank" className="hover:text-blue-700">
              Attributions
            </a>
          </li>
        </ul>
        <div className="hidden md:block">
          <a href="blank" className="hover:text-blue-700">
            Flickr API Changelog
          </a>
        </div>
      </nav>
    </section>
  );
};

export default Menubar;
