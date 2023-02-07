import React from "react";
import topHero from "../../../../assets/images/prints/prints-hero.jpg";

const TopHero = () => {
  return (
    <section className="w-full h-full">
      <div className="relative w-full h-full bg-gray-100">
        <div className="absolute top-10 w-fullh-full px-6 md:left-24 md:w-96">
          <h1 className="text-4xl font-semibold">Prints & Wall Art</h1>
          <p className=" text-2xl font-light pt-3 pb-10">
            Get stunning wall art and high-quality prints of your photos
          </p>
          <button className="px-8 py-3 border-2 border-black rounded font-semibold transition hover:bg-black hover:text-white">
            Get started
          </button>
        </div>
        <div className="w-full h-full">
          <img
            src={topHero}
            alt="Top Page Hero "
            className="w-full h-[500px] object-scale-down object-bottom md:h-full md:object-cover"
          />
        </div>
        <ul className="w-full h-full py-12 px-6 grid grid-cols-1 gap-x-5 md:grid-cols-3 md:px-24">
          <li>
            <h3 className="text-2xl font-semibold py-6">Metal prints</h3>
            <p className="leading-loose tracking-wide">
              Metal prints deliver unparalleled color and vibrance to produce a
              depth and clarity unlike any other photographic wall art. If you
              want a print as bold as your most epic photos, look no further
              than metal prints.
            </p>
          </li>
          <li>
            <h3 className="text-2xl font-semibold py-6">Paper prints</h3>
            <p className="leading-loose tracking-wide">
              Paper prints are a time-honored way to show off and share your
              favorite photos. From stacks of 4x6s to frameable statement
              pieces, you'll be able to find the perfect size and paper finish
              for any photo.
            </p>
          </li>
          <li>
            <h3 className="text-2xl font-semibold py-6">Canvas prints</h3>
            <p className="leading-loose tracking-wide">
              Add a little class to your home, office, or whatever other space
              needs a classic canvas print. With shapes and sizes perfect for
              wherever you want to hang your photos, your images will look
              outstanding.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TopHero;
