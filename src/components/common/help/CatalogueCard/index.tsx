import React from "react";

type CatalogueCardProps = {
  title: string;
  text: string;
};

const CatalogueCard = ({ title, text }: CatalogueCardProps) => {
  return (
    <div className="w-full h-full border border-teal-800 rounded-lg md:last:col-span-3 ">
      <button className=" w-full h-full py-7 px-2 text-center text-gray-700 hover:bg-teal-800 hover:rounded-lg hover:text-white">
        <h5 className="mb-3 capitalize">{title}</h5>
        <p className="font-light">{text}</p>
      </button>
    </div>
  );
};

export default CatalogueCard;
