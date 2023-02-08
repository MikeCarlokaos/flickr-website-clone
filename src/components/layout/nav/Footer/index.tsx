import React from "react";
import tumblr from "../../../../assets/icons/about/tumblr-logo.png";
import facebook from "../../../../assets/icons/home/facebook-logo.png";
import twitter from "../../../../assets/icons/home/twitter-logo.png";

const Footer = () => {
  return (
    <section className="w-full h-full px-6 bg-black divide-y divide-gray-600 md:px-40">
      <div className="py-3">
        <ul className="w-full h-full flex flex-col gap-y-3 divide-y whitespace-nowrap text-white capitalize md:flex-row md:gap-x-3 md:divide-y-0 md:justify-between">
          <li>
            <a href="/about" className="hover:text-zinc-500 ">
              about
            </a>
          </li>
          <li className="pt-3 md:pt-0">
            <a href="/jobs" className="hover:text-zinc-500">
              jobs
            </a>
          </li>
          <li className="pt-3 md:pt-0">
            <a href="/blog" className="hover:text-zinc-500">
              blog
            </a>
          </li>
          <li className="pt-3 md:pt-0">
            <a href="/developers" className="hover:text-zinc-500">
              developers
            </a>
          </li>
          <li className="pt-3 md:pt-0">
            <a href="/guidelines" className="hover:text-zinc-500">
              guidelines
            </a>
          </li>
          <li className="pt-3 md:pt-0">
            <a href="/report-abuse" className="hover:text-zinc-500">
              report abuse
            </a>
          </li>
          <li className="pt-3 md:pt-0">
            <a href="/help-forum" className="hover:text-zinc-500">
              help forum
            </a>
          </li>
          <li className="pt-3 md:pt-0">
            <span className="justify-items-end hover:text-zinc-500">
              english
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full flex justify-between py-3">
        <ul className="w-1/2 h-full flex text-zinc-500 gap-x-9 whitespace-nowrap capitalize">
          <li>
            <a href="/privacy" className="hover:text-white">
              privacy
            </a>
          </li>
          <li>
            <a href="/terms" className="hover:text-white">
              terms
            </a>
          </li>
          <li>
            <a href="/cookies" className="hover:text-white">
              cookies
            </a>
          </li>
          <li>
            <a href="/help" className="hover:text-white">
              help
            </a>
          </li>
        </ul>
        <ul className="hidden w-1/2 h-full justify-end gap-x-9 md:flex">
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img
                src={tumblr}
                alt="Tumblr logo"
                className="w-[20px] h-[20px] brightness-50 hover:filter-none"
              />
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img
                src={facebook}
                alt="Facebook logo"
                className="w-[20px] h-[20px] brightness-50 hover:filter-none"
              />
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img
                src={twitter}
                alt="Twitter logo"
                className="w-[20px] h-[20px] brightness-50 hover:filter-none"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
