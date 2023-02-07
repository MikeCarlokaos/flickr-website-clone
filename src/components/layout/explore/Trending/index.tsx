import React from "react";
import trending from "../../../../data/explore/trending";

const Trending = () => {
  const TagCatalogue = trending.map((tag) => {
    return (
      <div key={tag.id} className="relative group w-full h-44 cursor-pointer">
        <img
          src={tag.img}
          alt={tag.text}
          className="w-full h-full object-fill brightness-75 group-hover:brightness-95"
        />
        <h3 className="absolute inset-0 w-full h-full flex items-center justify-center text-2xl text-white font-semibold">
          {tag.text}
        </h3>
      </div>
    );
  });

  return (
    <section className="w-full h-full px-24 pt-5 pb-16 bg-gray-100">
      <div className="w-full h-full">
        <h3 className="text-2xl mb-3">Trending</h3>
      </div>
      <div className="w-full h-full grid grid-cols-1 gap-5 md:grid-cols-5">
        {TagCatalogue}
      </div>
    </section>
  );
};

export default Trending;
