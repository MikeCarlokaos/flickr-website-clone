import React from "react";

const Sidebar = () => {
  return (
    <section className="w-full h-full flex flex-col gap-y-5 px-5 py-8 text-var-blue-100 md:w-[21%] md:ml-[5.5rem]">
      <div>
        <ul className="flex flex-col divide-y divide-gray-300">
          <li className="py-2">
            <a href="blank" className=" hover:bg-var-blue-100 hover:text-white">
              Flickr blog
            </a>
          </li>
          <li className="py-2">
            <a href="blank" className="hover:bg-var-blue-100 hover:text-white">
              Community guidelines
            </a>
          </li>
          <li className="py-2">
            <a href="blank" className="hover:bg-var-blue-100 hover:text-white">
              Jobs
            </a>
          </li>
          <li className="flex flex-col py-5 gap-y-2">
            <div className="text-center ">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-100 px-2 py-2 rounded drop-shadow-lg text-pink-500 font-bold tracking-tight "
              >
                Create your free account
              </a>
            </div>
            <div className="text-center ">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:bg-var-blue-100 hover:text-white"
              >
                or Sign In
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div className="text-sm">
        <p className="text-black font-semibold mb-3">Need help?</p>
        <ul>
          <li>
            <a href="blank" className="hover:bg-var-blue-100 hover:text-white">
              Visit our FAQ
            </a>
          </li>
          <li>
            <a href="blank" className="hover:bg-var-blue-100 hover:text-white">
              Get help by email
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
