import React from "react";
import { NavLink, Outlet } from "react-router-dom";

type MenubarProps = {
  isActive: boolean;
};

const Menubar = () => {
  const navLinkStyles = ({ isActive }: MenubarProps) => {
    return {
      borderBottomColor: isActive ? "#0ea5e9" : "transparent",
    };
  };

  return (
    <section>
      <nav className="w-full h-full px-10 bg-white md:px-24">
        <ul className="w-full h-full flex items-center justify-center gap-x-5 capitalize md:justify-start">
          <NavLink
            style={navLinkStyles}
            to="explore-page"
            className="py-3 px-4 border-b-4 border-b-transparent hover:border-sky-500"
          >
            explore
          </NavLink>
          <NavLink
            style={navLinkStyles}
            to="trending"
            className="py-3 px-4 border-b-4 border-b-transparent hover:border-sky-500"
          >
            trending
          </NavLink>
          <NavLink
            style={navLinkStyles}
            to="event"
            className="py-3 px-4 border-b-4 border-b-transparent hover:border-sky-500"
          >
            event
          </NavLink>
        </ul>
      </nav>
      <Outlet />
    </section>
  );
};

export default Menubar;
