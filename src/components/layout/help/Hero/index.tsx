import React from "react";
import bgHero from "../../../../assets/images/jobs/jobs-hero-image.jpeg";
import searchIcon from "../../../../assets/icons/search-icon.png";

const Hero = () => {
  const PopupAlert = () => {
    alert("This is only a sample");
  };
  return (
    <section className="relative w-full h-80">
      <img
        src={bgHero}
        alt="Help Hero"
        className="w-full h-full object-cover object-center brightness-90"
      />
      <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-16 align-center px-5 md:w-[600px] md:px-0">
        <form
          action="search-bar"
          className="relative w-full h-10 flex bg-white rounded-2xl"
        >
          <button
            type="submit"
            className="absolute top-1/2 left-3 -translate-y-1/2 pr-2"
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
            placeholder="Search"
            className="w-full bg-transparent px-9 text-sm text-black placeholder:text-black/60"
          />
        </form>
      </div>
    </section>
  );
};

export default Hero;
