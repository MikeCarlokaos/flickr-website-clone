import React from "react";

const Article = () => {
  return (
    <section className="w-full h-full mx-auto pt-5 pb-16 px-5 md:w-[975px] md:px-0">
      <div className="space-y-3 py-3">
        <h3 className="text-pink-500 text-2xl font-semibold">
          What is Flickr?
        </h3>
        <p className="text-sm">
          Flickr is almost certainly the best online photo management and
          sharing application in the world. On Flickr, members upload photos,
          share them securely, supplement their photos with metadata like
          license information, geo-location, people, tags, etc., and interact
          with their family, friends, contacts or anyone in the community.
          Practically all the features on Flickr's various platforms -- web,
          mobile and desktop -- are accompanied by a longstanding API program.
          Since 2005, developers have collaborated on top of Flickr's APIs to
          build fun, creative, and gorgeous experiences around photos that
          extend beyond Flickr.
        </p>
      </div>
      <div className="w-full h-full flex justify-between gap-x-5">
        <div className="w-full h-full space-y-3 py-3 text-sm">
          <h5 className="text-pink-500 text-xl font-semibold">
            Getting the most out of the Flickr API
          </h5>
          <p>
            Getting the most out of the Flickr API We encourage all sorts of
            integrations, such as features and products that:
          </p>
          <ul className="list-disc list-inside">
            <li>
              Help people make their photos available to people who matter to
              them
            </li>
            <li>Enable new ways of organizing photos and videos</li>
            <li>Are fun!</li>
          </ul>
          <p>
            The best integrations contribute to the Flickr community by
            encouraging members to converse, share, and curate. Integrations
            that primarily use Flickr as a photo storage service or a stock
            imagery provider miss the point behind photo sharing (as well as
            violate the{" "}
            <a href="/guidelines" className="text-blue-700">
              Community Guidelines
            </a>{" "}
            ). In other words, participate!
          </p>
          <p>
            So how do you participate? We pulled together some guidelines for
            you here. Since the internet tends to be a fast moving place, please
            check back here often for updates, and we also have a Changelog to
            help you track changes to these Guidelines.
          </p>
          <p>
            If you're a developer who would like to build something neat with
            the data on Flickr, everything you need to know to get started is
            right here. Just keep in mind that you're working with other
            peoples' photography, so please respect them and the Flickr{" "}
            <a href="/guidelines" className="text-blue-700">
              Community Guidelines
            </a>
            .
          </p>
        </div>
        <div className="w-80 h-full space-y-3 py-3 text-sm">
          <h5 className="text-pink-500 text-xl font-semibold">
            The Flickr API
          </h5>
          <p>
            With over 5 billion photos (many with valuable metadata such as
            tags, geolocation, and Exif data), the Flickr community creates
            wonderfully rich data. The Flickr API is how you can access that
            data. In fact, almost all the functionality that runs flickr.com is
            available through the API. And the API is completely free to use, as
            a service to our members as well as developers and other
            integrators, so they can create even more ways to interact with
            photos beyond flickr.com.
          </p>
        </div>
      </div>
      <div className="w-full h-full py-5 font-bold text-lg">
        Still have questions? Check out code.flickr.com or the{" "}
        <a href="/help" className="text-blue-700">
          FAQs
        </a>
        !
      </div>
    </section>
  );
};

export default Article;
