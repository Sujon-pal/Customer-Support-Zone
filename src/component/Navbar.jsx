import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-white px-6 lg:px-16 shadow-2xs  ">
      
      {/* Left */}
      <div className="navbar-start">
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

          {/* Mobile Menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-white rounded-box w-52"
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
        <a className="text-lg font-semibold text-gray-700">
          CS — Ticket System
        </a>
      </div>

    <div className="flex gap-10">
          {/* Center Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 text-sm font-semibold text-gray-700">
          <li><a className="hover:text-black">Home</a></li>
          <li><a className="hover:text-black">FAQ</a></li>
          <li><a className="hover:text-black">Changelog</a></li>
          <li><a className="hover:text-black">Blog</a></li>
          <li><a className="hover:text-black">Download</a></li>
          <li><a className="hover:text-black">Contact</a></li>
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end">
        <button className="btn btn-primary bg-linear-to-r from-violet-800 to-fuchsia-300 border-none text-white px-5">
          + New Ticket
        </button>
      </div>
    </div>
    </div>
  );
};

export default Navbar;