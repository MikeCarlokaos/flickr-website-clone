import React from "react";
import photos from "../../../../data/explore/photos";

const ExplorePage = () => {
  const PhotoGallery = photos.map((photo) => {
    return (
      <div key={photo.id} className="w-full h-full gallery">
        <img src={photo.img} alt="Gallery" className="w-full h-full" />
      </div>
    );
  });
  return (
    <section className="w-full h-full px-10 pt-5 pb-16 bg-gray-100 md:px-24">
      <div className="w-full h-full">
        <h3 className="text-2xl mb-3">Explore</h3>
      </div>
      <div className="w-full h-full grid grid-cols-1 gap-5 md:grid-cols-3">
        {PhotoGallery}
      </div>
    </section>
  );
};

export default ExplorePage;
