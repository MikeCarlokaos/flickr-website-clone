import React from "react";
import flickrBlogLogo from "../../../../assets/images/blog/flickr-blog-logo.png";
import searchIcon from "../../../../assets/icons/search-icon.png";

const Navbar = () => {
  return (
    <nav className="w-full h-full bg-black/90 text-white">
      <div className="w-full h-full mx-auto flex items-center justify-between py-2 px-4 md:w-[940px] md:px-0">
        <div>
          <a href="/blog">
            <img src={flickrBlogLogo} alt="Flickr Blog" />
          </a>
        </div>
        <div>
          <ul className="flex gap-x-4 capitalize">
            <li className="hidden md:block">
              <a href="/categories" className="hover:text-white/60">
                categories
              </a>
            </li>
            <li className="hidden md:block">
              <a href="/galleries" className="hover:text-white/60">
                galleries
              </a>
            </li>
            <li className="hidden md:block">
              <a href="/code-blog" className="hover:text-white/60">
                code blog
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white/60">
                flickr.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <form
            action="search-bar"
            className="relative w-32 h-9 flex bg-white/80 rounded md:w-56"
          >
            <button
              type="submit"
              className="absolute top-1/2 left-3 -translate-y-1/2 pr-2"
            >
              <img
                src={searchIcon}
                alt="search icon"
                className="w-[16px] h-[16px]"
              />
            </button>
            <input
              type="text"
              name="text"
              id="text"
              className="w-full bg-transparent px-9 text-sm placeholder:pl-8 placeholder:text-black/60"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
