import React from "react";
import bgHero from "../../../../assets/images/blog/theprintshop-hero.webp";

const Hero = () => {
  return (
    <section className="w-full h-screen mt-12">
      <div className="relative w-full h-full md:h-[95vh]">
        <img
          src={bgHero}
          alt="The PrintShop"
          className="w-full h-full object-scale-down object-top md:object-fill"
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full pt-5 px-10 bg-white tracking-wide md:w-[940px]">
          <h3 className="text-3xl font-light">
            Flickr Print Shop: World-class prints from Flickr photographers
            delivered to your door.
          </h3>
          <p className="text-black/50 pl-1.5 mb-4">JANUARY 10, 2023</p>
          <p>
            We're rolling out a new feature on Flickr that lets anyone—Flickr
            members and visitors alike—order professional quality prints from a
            select group of photographers who've made their work available for
            sale.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
