import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

type ArticleSectionProps = {
  coverImg: string;
  title: string;
  text: string;
  direction: string;
  effect: string;
};

const ArticleSection = ({
  coverImg,
  title,
  text,
  direction,
  effect,
}: ArticleSectionProps) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <article data-aos={`${effect}`} className="w-full h-full p-10 border-b">
      <div
        className={`w-full h-full mx-auto flex flex-col-reverse overflow-x-hidden md:${direction}  md:w-[1060px]`}
      >
        <div className="w-full h-full px-20 py-5 md:w-1/2">
          <h3 className="text-2xl font-semibold tracking-wide pb-6">{title}</h3>
          <p>{text}</p>
        </div>
        <div className="w-full h-full md:w-1/2">
          <img src={coverImg} alt="" />
        </div>
      </div>
    </article>
  );
};

export default ArticleSection;
