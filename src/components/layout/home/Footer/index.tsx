import React from "react";
import facebook from "../../../../assets/icons/home/facebook-logo.png";
import twitter from "../../../../assets/icons/home/twitter-logo.png";
import instagram from "../../../../assets/icons/home/instagram-logo.png";

const Footer = () => {
  return (
    <section className="w-full h-full py-4 px-8 bg-black -mt-4 md:flex">
      <ul className="w-full h-full flex flex-col gap-y-3 text-sm text-zinc-500 font-semibold capitalize divide-y md:flex-row md:items-center md:justify-items-center md:gap-x-[2.20rem] md:divide-y-0">
        <li className="pt-2 md:pt-0">
          <a href="/about" className="hover:text-white">
            about
          </a>
        </li>
        <li className="pt-2 md:pt-0">
          <a href="/jobs" className="hover:text-white">
            jobs
          </a>
        </li>
        <li className="pt-2 md:pt-0">
          <a href="/blog" className="hover:text-white">
            blog
          </a>
        </li>
        <li className="pt-2 md:pt-0">
          <a href="/developers" className="hover:text-white">
            developers
          </a>
        </li>
        <li className="pt-2 md:pt-0">
          <a href="/guidelines" className="hover:text-white">
            guidelines
          </a>
        </li>
        <li className="pt-2 md:pt-0">
          <a href="/help" className="hover:text-white">
            help
          </a>
        </li>
        <li className="pt-2 md:pt-0">
          <a href="/help-forum" className="hover:text-white">
            help forum
          </a>
        </li>
        <li className="pt-2 md:pt-0">
          <a href="/privacy" className="hover:text-white">
            privacy
          </a>
        </li>
        <li className="pt-2 md:pt-0">
          <a href="/terms" className="hover:text-white">
            terms
          </a>
        </li>
        <li className="pt-2 md:pt-0">
          <a href="/cookies" className="hover:text-white">
            cookies
          </a>
        </li>
        <li className="pt-2 md:pt-0">
          <span className="hover:text-white">english</span>
        </li>
        <li className="text-center">
          <a href="/smugmug" className="hover:text-white">
            smugMug
          </a>
          +
          <a href="/" className="hover:text-white">
            flickr
          </a>
        </li>
      </ul>
      <ul className="flex gap-x-5 py-5 justify-center md:flex-row md:items-center md:gap-x-[2.25rem] md:py-0">
        <li className="text-center">
          <a href="/share-facebook">
            <img
              src={facebook}
              alt="facebook icon"
              className="w-[24px] h-[20px] brightness-50 hover:filter-none md:w-[18px]"
            />
          </a>
        </li>
        <li className="text-center">
          <a href="/share-twitter">
            <img
              src={twitter}
              alt="twitter icon"
              className="w-[20px] h-[20px] brightness-50 hover:filter-none"
            />
          </a>
        </li>
        <li className="text-center">
          <a href="/share-instagram">
            <img
              src={instagram}
              alt="instagram icon"
              className="w-[24px] h-[24px] brightness-50 hover:filter-none"
            />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Footer;
