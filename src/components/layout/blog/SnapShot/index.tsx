import React from "react";
import snapshot from "../../../../data/blog/snapshot/snapshot";
import SnapshotArticle from "../../../common/blog/SnapshotArticle";

const Snapshot = () => {
  const SnapshotCard = snapshot.map((article) => {
    return <SnapshotArticle key={article.id} {...article} />;
  });
  return (
    <section className="w-full h-full py-10 px-9">
      <div className="w-full h-full flex flex-col items-center md:w-[940px] md:mx-auto md:grid md:grid-cols-2 md:gap-x-12">
        {SnapshotCard}
      </div>
    </section>
  );
};

export default Snapshot;
