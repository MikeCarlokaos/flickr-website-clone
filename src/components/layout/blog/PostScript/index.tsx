import React from "react";
import photo from "../../../../assets/images/blog/photographer.webp";
import facebookPage from "../../../../assets/images/blog/flickr-facebook.jpg";

const PostScript = () => {
  return (
    <section className="w-full h-full bg-black/80 text-white py-10 px-9 md:px-0">
      <div className="w-full h-full flex flex-col items-center md:w-[940px] md:mx-auto md:grid md:grid-cols-3 md:gap-x-12">
        <article className="w-full h-full">
          <h5 className="text-xl text-white/80 mb-4 capitalize">
            featured photographer
          </h5>
          <img
            src={photo}
            alt="Photographer"
            className="w-24 h-24 mr-5 float-left rounded-full"
          />
          <a href="blank">Albert Dros</a>
          <p className="italic text-white/60">
            Albert Dros has an extreme passion for landscape photography and is
            driven to plan and capture unique shots, from volcanoes to solar
            eclipses. Albert's work has been published in Time, Huffington Post,
            National Geographic, and more. In addition to photography, Albert
            also practices design, motion graphics, video, and audio.
          </p>
        </article>
        <article className="w-full h-full">
          <h5 className="text-xl text-white/80 mb-4 capitalize">
            stay up to date with flickr
          </h5>
          <img src={facebookPage} alt="Flicker Facebook Page" />
        </article>
        <article className="w-full h-full">
          <h5 className="text-xl text-white/80 mb-4 capitalize">about</h5>
          <p className="text-white/60">
            Welcome to the companion blog for Flickr, the home for all your
            photos. Flickr is the best site on the web for organizing, sharing
            and storing your photos. We provide you the tools for easy
            collaboration with one of the world's most passionate photo
            communities.
          </p>
        </article>
      </div>
    </section>
  );
};

export default PostScript;
