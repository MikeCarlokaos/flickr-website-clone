import React from "react";
import midHero from "../../../../assets/images/prints/prints-mid-page-hero.jpg";

const MidHero = () => {
  return (
    <section className="w-full h-full pb-16 bg-gray-100">
      <div>
        <div className="w-full h-96">
          <img
            src={midHero}
            alt="Mid Page Hero"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="w-full h-full px-6 md:px-24">
          <h3 className="text-2xl font-semibold py-6">FAQ</h3>
          <div className="w-full h-full grid grid-cols-1 gap-x-2 md:grid-cols-3">
            <ul>
              <li>
                <h3 className="text-2xl font-semibold py-6">
                  Who can print my photos?
                </h3>
                <p className="leading-relaxed tracking-wide">
                  Only you can print your photos through Flickr. Visitors to
                  your account will not see the option to buy prints of your
                  photos.
                </p>
              </li>
              <li>
                <h3 className="text-2xl font-semibold py-6">
                  Who makes the prints and wall art?
                </h3>
                <p className="leading-relaxed tracking-wide">
                  Flickr Prints benefit from years of experience that SmugMug
                  has in printing beautiful imagery. Depending on your location,
                  your prints will come from Bay Photo, White House Custom
                  Colour, or Loxley Colour. All the labs we use have excellent
                  color reproduction and fantastic reputations.
                </p>
              </li>
            </ul>
            <ul>
              <li>
                <h3 className="text-2xl font-semibold py-6">
                  Where can I make a photo book?
                </h3>
                <p className="leading-relaxed tracking-wide">
                  We partner with Blurb for both hard-cover and soft-cover photo
                  books. Your Flickr photo stream and albums are seamlessly
                  integrated into the book-making process. Check out photo
                  books.
                </p>
              </li>
              <li>
                <h3 className="text-2xl font-semibold py-6">
                  How long does shipping take?
                </h3>
                <p className="leading-relaxed tracking-wide">
                  We ship all over the world, including more than 160 countries.
                  No matter where you are, we'll get your prints to you as fast
                  as we can. Expedited shipping is available to get your prints
                  even faster.
                </p>
              </li>
            </ul>
            <ul>
              <li>
                <h3 className="text-2xl font-semibold py-6">
                  What if something is wrong with my order?
                </h3>
                <p className="leading-relaxed tracking-wide">
                  If you're ever unhappy with your prints or wall art, Flickr
                  will make it right. Simply send us an email within 30 days of
                  receiving your order and we'll help you out. If you have any
                  issues, reach out to our Support Heroes.
                </p>
              </li>
              <li>
                <h3 className="text-2xl font-semibold py-6">More questions?</h3>
                <p className="leading-relaxed tracking-wide">
                  Please visit the Flickr Help Center for more information or to
                  connect with a Support Hero.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidHero;
