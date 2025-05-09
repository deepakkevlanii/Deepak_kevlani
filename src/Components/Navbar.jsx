import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="text-white text-xl flex flex-wrap gap-4 md:pl-28 pl-5 py-4">
      <Link
        to="/"
        className={`relative ${
          location.pathname === "/" ? "text-blue-400" : "hover:text-blue-400"
        } transition-colors duration-300 ease-in-out`}
      >
        About Me
        <span
          className={`block h-0.5 ${
            location.pathname === "/"
              ? "w-full bg-blue-400"
              : "w-0 bg-blue-400 hover:w-full"
          } transition-all duration-300`}
        ></span>
      </Link>
      <Link
        to="/skill"
        className={`relative ${
          location.pathname === "/skill"
            ? "text-blue-400"
            : "hover:text-blue-400"
        } transition-colors duration-300 ease-in-out`}
      >
        Skill
        <span
          className={`block h-0.5 ${
            location.pathname === "/skill"
              ? "w-full bg-blue-400"
              : "w-0 bg-blue-400 hover:w-full"
          } transition-all duration-300`}
        ></span>
      </Link>
      <Link
        to="/project"
        className={`relative ${
          location.pathname === "/project"
            ? "text-blue-400"
            : "hover:text-blue-400"
        } transition-colors duration-300 ease-in-out`}
      >
        Project
        <span
          className={`block h-0.5 ${
            location.pathname === "/project"
              ? "w-full bg-blue-400"
              : "w-0 bg-blue-400 hover:w-full"
          } transition-all duration-300`}
        ></span>
      </Link>
      <Link
        to="/service"
        className={`relative ${
          location.pathname === "/service"
            ? "text-blue-400"
            : "hover:text-blue-400"
        } transition-colors duration-300 ease-in-out`}
      >
        Services
        <span
          className={`block h-0.5 ${
            location.pathname === "/service"
              ? "w-full bg-blue-400"
              : "w-0 bg-blue-400 hover:w-full"
          } transition-all duration-300`}
        ></span>
      </Link>
      <Link
        to="/contactus"
        className={`relative ${
          location.pathname === "/contactus"
            ? "text-blue-400"
            : "hover:text-blue-400"
        } transition-colors duration-300 ease-in-out`}
      >
        Contact Me
        <span
          className={`block h-0.5 ${
            location.pathname === "/contactus"
              ? "w-full bg-blue-400"
              : "w-0 bg-blue-400 hover:w-full"
          } transition-all duration-300`}
        ></span>
      </Link>
    </nav>
  );
};

export default Navbar;
