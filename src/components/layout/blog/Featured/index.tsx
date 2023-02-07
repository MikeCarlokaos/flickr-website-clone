import React from "react";
import featured from "../../../../data/blog/featured/featured";
import FeaturedArticle from "../../../common/blog/FeaturedActicle";

const Featured = () => {
  const FeaturedSelection = featured.map((article) => {
    return <FeaturedArticle key={article.id} {...article} />;
  });
  return (
    <section className="w-full h-full pt-2 pb-10 bg-black/10">
      <div className="w-full h-full mx-auto space-y-3 md:w-[940px]">
        <h3 className="text-2xl font-light px-10 md:px-0">Featured</h3>
        <div className="w-full h-full flex flex-col items-center md:grid md:grid-cols-3 md:gap-x-12">
          {FeaturedSelection}
        </div>
      </div>
    </section>
  );
};

export default Featured;
