import React from "react";

type SnapshotArticleProps = {
  coverImg: string;
  title: string;
  date: string;
  text: string;
};

const SnapshotArticle = ({
  coverImg,
  title,
  date,
  text,
}: SnapshotArticleProps) => {
  return (
    <article className="w-full h-full pb-10">
      <div>
        <img src={coverImg} alt="Snapshots" className="w-full" />
      </div>
      <div className="tracking-wide">
        <h3 className="text-2xl font-light">{title}</h3>
        <p className="text-black/50 pl-1.5 mb-4">{date}</p>
        <p>{text}</p>
      </div>
    </article>
  );
};

export default SnapshotArticle;
