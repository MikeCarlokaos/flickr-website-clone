import React from "react";

const Openings = () => {
  return (
    <section id="openings" className="w-full h-full bg-zinc-100">
      <div className="w-full py-16 px-12 mx-auto md:w-[1060px] md:px-0">
        <h2 className="w-full h-full text-2xl text-center text-black/60 pb-2 capitalize">
          current openings
        </h2>
        <div className="w-full h-full flex flex-col">
          <h3 className="w-full h-full text-xl text-black/60 capitalize">
            flickr engineering
          </h3>
          <div className="w-full h-full grid grid-cols-2 items-center justify-items-center px-5 py-3 rounded tracking-wider bg-white md:grid-cols-3">
            <p className="justify-self-start">Senior DevOps Engineer, Flickr</p>
            <p className="hidden w-60 text-center text-black/50 md:block">
              Remote/WFH, Mountain View, California
            </p>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="justify-self-end text-var-blue-100"
            >
              View
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Openings;
