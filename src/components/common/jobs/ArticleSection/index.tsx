import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

type ArticleSectionProps = {
  coverImg: string;
  title: string;
  text: string;
  effect: string;
};

const ArticleSection = ({
  coverImg,
  title,
  text,
  effect,
}: ArticleSectionProps) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <article
      data-aos={`${effect}`}
      className="w-full h-full p-10 border-b flex flex-col-reverse md:w-[1060px] md:mx-auto md:flex-row md:even:flex-row-reverse"
    >
      <div className="w-full h-full px-5 py-5 md:w-1/2 md:px-20">
        <h3 className="text-2xl font-semibold tracking-wide pb-6">{title}</h3>
        <p>{text}</p>
      </div>
      <div className="w-full h-full md:w-1/2">
        <img src={coverImg} alt="" />
      </div>
    </article>
  );
};

export default ArticleSection;
