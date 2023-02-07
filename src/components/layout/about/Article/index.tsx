import React from "react";

const Article = () => {
  return (
    <section className="w-full md:w-[79%]">
      <div className="w-[600px] py-12 mx-auto">
        <h3 className="text-4xl text-pink-500 font-semibold capitalize">
          about flickr
        </h3>
        <p className="py-3 text-xl font-semibold">
          Flickr - almost certainly the best online photo management and sharing
          application in the world - has <em>two main goals</em>:
        </p>
        <ol className="list-decimal list-inside marker:text-pink-500 space-y-2 ml-6">
          <li className="space-y-2">
            We want to{" "}
            <strong>
              help people make their photos available to the people who matter
              to them
            </strong>
            .
            <p className="text-sm">
              Maybe they want to keep a blog of moments captured on their
              cameraphone, or maybe they want to show off their best pictures or
              video to the whole world in a bid for web celebrity. Or maybe they
              want to securely and privately share photos of their kids with
              their family across the country. Flickr makes all these things
              possible and more!
            </p>
            <p className="text-sm">
              To do this, we want to{" "}
              <strong>
                get photos and video into and out of the system in as many ways
                as we can
              </strong>
              : from the web, from mobile devices, from the users' home
              computers and from whatever software they are using to manage
              their content. And we want to be able to push them out in as many
              ways as possible: on the Flickr website, in RSS feeds, by email,
              by posting to outside blogs or ways we haven't thought of yet.
              What else are we going to use those smart refrigerators for?
            </p>
          </li>
          <li className="space-y-2">
            We want to{" "}
            <strong>enable new ways of organizing photos and video</strong>.
            <p className="text-sm">
              Once you make the switch to digital, it is all too easy to get
              overwhelmed with the sheer number of photos you take or videos you
              shoot with that itchy trigger finger. Albums, the principal way
              people go about organizing things today, are great -- until you
              get to 20 or 30 or 50 of them. They worked in the days of getting
              rolls of film developed, but the "album" metaphor is in desperate
              need of a Florida condo and full retirement.
            </p>
            <p className="text-sm">
              Part of the solution is to make the process of organizing photos
              or videos collaborative. In Flickr, you can give your friends,
              family, and other contacts permission to organize your stuff - not
              just to add comments, but also notes and tags. People like to ooh
              and ahh, laugh and cry, make wisecracks when sharing photos and
              videos. Why not give them the ability to do this when they look at
              them over the internet? And as all this info accretes as metadata,
              you can find things so much easier later on, since all this info
              is also searchable.
            </p>
          </li>
        </ol>
        <div className="py-3 text-sm">
          <p>
            Flickr continues to evolve in myriad ways, all of which are designed
            to make it easier and better. Check out the{" "}
            <a href="blank" className="text-var-blue-100">
              Flickr Blog
            </a>{" "}
            to stay apprised of the latest developments. The fact that you've
            read to the end of this entire document and are hanging out at the
            bottom of this page with nothing but this silly text to keep you
            company is proof of a deep and abiding interest on your part. What
            are you waiting for?{" "}
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="text-var-blue-100 font-bold"
            >
              Sign up now!
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Article;
