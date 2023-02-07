import React from "react";
import logoIcon from "../../../../assets/icons/flickr-logo.png";
import logoTextIcon from "../../../../assets/icons/flickr-text-logo.png";

const SignupNavbar = () => {
  return (
    <nav className=" w-full h-full px-12 py-2 flex items-center gap-x-60 bg-black/80 text-white capitalize ">
      <div>
        <ul className="">
          <li>
            <a href="/" className="w-24 h-full flex space-x-1.5 items-center">
              <img
                src={logoIcon}
                alt="Flickr Logo"
                className=" h-[23px] w-[23px]"
              />
              <img
                src={logoTextIcon}
                alt="Flickr Logo"
                className=" h-[22px] w-[4.35rem]"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SignupNavbar;
