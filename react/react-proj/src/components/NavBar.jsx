
import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  const links = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Counter", path: "/counter" },
    { name: "Players", path: "/players" },
    { name: "Score", path: "/score" },
    { name: "User", path: "/user" },
    { name: "Flipkart", path: "/flipkart" },
    { name: "Fetch API", path: "/fetch-api" },
    { name: "Registration", path: "/registration" }
  ];

  return (
    <nav className="bg-zinc-950 border-b border-yellow-600/40 shadow-lg shadow-yellow-900/10">

      <div className="max-w-7xl mx-auto px-4 py-5">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

          {/* Logo */}
          <NavLink
            to="/home"
            className="text-2xl font-bold tracking-wider text-yellow-400"
          >
            React<span className="text-white">App.</span>
          </NavLink>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-2">

            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${
                    isActive
                      ? "bg-yellow-500 text-black shadow-md shadow-yellow-500/20"
                      : "text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-400"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

          </div>

        </div>

      </div>

    </nav>
  );
}

export default NavBar;
