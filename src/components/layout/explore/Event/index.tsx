import React from "react";
import event from "../../../../assets/images/explore/event/event.jpg";
import events from "../../../../data/explore/events";

const Event = () => {
  return (
    <section className="w-full h-full px-5 pt-5 pb-16 bg-gray-100 md:px-24">
      <div className="w-full h-full text-center md:text-start">
        <h3 className="text-2xl mb-6 capitalize">upcoming events</h3>
        <div className="w-full h-full grid justify-items-center md:w-1/2">
          <div className="w-96 h-full text-center shadow-lg">
            <div className="w-full h-24">
              <img
                src={event}
                alt="gallery"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-full h-full p-5 text-sm text-black/80 space-y-1.5">
              <h3 className="text-lg text-black font-semibold">
                The Nature of a Self-Portrait Artist
              </h3>
              <p>July 30th @ 10.30am PST</p>
              <p>Worldwide</p>
              <p className="text-black/60">
                Join us live on YouTube for a conversation with Self-Portrait
                Landscape Artist Lizzy Gadd
              </p>
              <div className="w-full pt-5">
                <button className="w-20 h-full bg-sky-500 text-white font-semibold px-5 py-1.5 rounded">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full mt-16 text-center md:text-start">
        <h3 className="text-2xl mb-6 capitalize">past events</h3>
        <div className="w-full h-full grid grid-cols-1 justify-items-center gap-y-16 md:grid-cols-2">
          {events.map((event) => {
            return (
              <div
                key={event.id}
                className="w-96  h-full text-center shadow-lg"
              >
                <div className="w-full h-24">
                  <img
                    src={event.img}
                    alt="gallery"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="w-full h-full p-5 text-sm text-black/80 space-y-1.5">
                  <h3 className="text-lg text-black font-semibold">
                    {event.title}
                  </h3>
                  <p>{event.date}</p>
                  <p>{event.venue}</p>
                  <p className="text-black/60">{event.text}</p>
                  <div className="w-full pt-5">
                    <button className="w-20 h-full bg-sky-500 text-white font-semibold px-5 py-1.5 rounded">
                      View
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Event;
