import React from "react";
import guide from "../../../../data/help/guide";

const Guide = () => {
  const GuideCatalogue = guide.map((article) => {
    return (
      <div
        key={article.id}
        className="w-full h-full flex items-center py-3 border-b border-black/30"
      >
        <a href="blank" className="hover:underline">
          {article.text}
        </a>
      </div>
    );
  });
  return (
    <section className="w-full h-full">
      <div>
        <h3 className="text-2xl px-16">Promoted articles</h3>
      </div>
      <div className="w-full h-full px-16 py-8 mb-16 grid grid-cols-3 gap-7">
        {GuideCatalogue}
      </div>
      <div className="w-full h-full bg-black/80 text-white text-center">
        <div className="py-12 space-y-4">
          <h3 className="text-2xl">Still need help?</h3>
          <button className="py-2 px-10 border rounded hover:underline">
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Guide;
