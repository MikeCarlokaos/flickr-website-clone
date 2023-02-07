import React from "react";

type FeaturedActicleProps = {
  coverImg: string;
  text: string;
};

const FeaturedArticle = ({ coverImg, text }: FeaturedActicleProps) => {
  return (
    <article className="w-96 h-96 md:w-full md:h-full">
      <div>
        <img
          src={coverImg}
          alt="Featured Snapshots"
          className="w-full h-full"
        />
      </div>
      <div>
        <p className="text-lg  font-light tracking-wide">{text}</p>
      </div>
    </article>
  );
};

export default FeaturedArticle;
