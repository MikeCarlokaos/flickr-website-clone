import React from "react";
import catalogues from "../../../../data/help/catalog";
import CatalogueCard from "../../../common/help/CatalogueCard";

const Catalogue = () => {
  const CatalogueMenu = catalogues.map((catalogue) => {
    return <CatalogueCard key={catalogue.id} {...catalogue} />;
  });
  return (
    <section className="w-full h-full">
      <div className="w-full h-full p-16 grid grid-cols-1 md:grid-cols-3 gap-7">
        {CatalogueMenu}
      </div>
    </section>
  );
};

export default Catalogue;
