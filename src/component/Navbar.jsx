import React from "react";

const Navbar = () => {
  return (
  <div className="navbar w-full bg-white fixed top-0 left-0 z-50 shadow-sm ">

      {/* Left */}
      <div className="navbar-start">
        
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-white rounded-box w-52"
          >
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>

        {/* Logo */}
        <a className="text-base sm:text-lg md:text-xl font-semibold text-gray-700">
          CS — Ticket System
        </a>
      </div>

      {/* Center Menu (Desktop only) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-3 text-sm font-semibold text-gray-700">
           <li><a href="#home" className="hover:text-black">Home</a></li>
          <li><a href="#faq" className="hover:text-black">FAQ</a></li>
          <li><a href="#resolved" className="hover:text-black">Resolved Task</a></li>
          <li><a href="#status" className="hover:text-black">Task Status</a></li>
          <li><a href="#download" className="hover:text-black">Download</a></li>
          <li><a href="#contact" className="hover:text-black">Contact</a></li>
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end">
        <button className="btn btn-primary bg-gradient-to-r from-violet-800 to-fuchsia-400 border-none text-white px-3 sm:px-4 md:px-5 text-xs sm:text-sm md:text-base">
          + New Ticket
        </button>
      </div>

    </div>
  );
};

export default Navbar;