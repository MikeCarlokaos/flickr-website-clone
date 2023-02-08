import React from "react";
import articles from "../../../../data/jobs/article/articles";
import ArticleSection from "../../../common/jobs/ArticleSection";

const Article = () => {
  const Articles = articles.map((article) => {
    return <ArticleSection key={article.id} {...article} />;
  });

  return (
    <section className="overflow-x-hidden">
      <div>{Articles}</div>
    </section>
  );
};

export default Article;
