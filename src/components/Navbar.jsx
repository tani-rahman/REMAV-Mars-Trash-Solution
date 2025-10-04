import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthContext";

const Navbar = () => {
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);
  const [mobileSolutionOpen, setMobileSolutionOpen] = useState(false);

  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => console.log("Logged out"))
      .catch((error) => console.error(error));
  };

  // ✅ Desktop links
  const desktopLinks = (
    <>
      <li>
        <NavLink to="/" className="hover:text-slate-400">
          Home
        </NavLink>
      </li>

      {/* Pages */}
      <li className="relative group">
        <span className="cursor-pointer hover:text-slate-400">Pages</span>
        <ul className="absolute top-full left-0 hidden group-hover:block bg-base-100 text-white shadow-lg rounded-md mt-1 w-44 z-[9999]">
          <li>
            <NavLink to="/about" className="block px-4 py-2 hover:bg-slate-700">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/team" className="block px-4 py-2 hover:bg-slate-700">
              Our Team
            </NavLink>
          </li>
          <li>
            <NavLink to="/faqs" className="block px-4 py-2 hover:bg-slate-700">
              FAQs
            </NavLink>
          </li>
          <li>
            <NavLink to="/footer" className="block px-4 py-2 hover:bg-slate-700">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </li>

      {/* Solution */}
      <li className="relative group">
        <span className="cursor-pointer hover:text-slate-400">Solution</span>
        <ul className="absolute top-full left-0 hidden group-hover:block bg-base-100 text-white shadow-lg rounded-md mt-1 w-48 z-[9999]">
          <li>
            <NavLink to="/trash" className="block px-4 py-2 hover:bg-slate-700">
              Trash
            </NavLink>
          </li>
          <li>
            <NavLink to="/resolve" className="block px-4 py-2 hover:bg-slate-700">
              Resolve Issue
            </NavLink>
          </li>
          <li>
            <NavLink to="/our-solution" className="block px-4 py-2 hover:bg-slate-700">
              Our Solution
            </NavLink>
          </li>
        </ul>
      </li>
    </>
  );

  // ✅ Mobile links
  const mobileLinks = (
    <>
      <li>
        <NavLink to="/" className="hover:text-slate-400 block w-full py-1">
          Home
        </NavLink>
      </li>

      {/* Pages */}
      <li>
        <button
          onClick={() => setMobilePagesOpen(!mobilePagesOpen)}
          className="w-full text-left hover:text-slate-400 flex justify-between items-center py-1"
        >
          Pages
          <span>{mobilePagesOpen ? "▲" : "▼"}</span>
        </button>
        {mobilePagesOpen && (
          <ul className="pl-4 mt-1 space-y-1">
            <li>
              <NavLink to="/about" className="block hover:bg-slate-700 px-2 py-1 rounded">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="block hover:bg-slate-700 px-2 py-1 rounded">
                Our Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/team" className="block hover:bg-slate-700 px-2 py-1 rounded">
                Our Team
              </NavLink>
            </li>
            <li>
              <NavLink to="/faqs" className="block hover:bg-slate-700 px-2 py-1 rounded">
                FAQs
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="block hover:bg-slate-700 px-2 py-1 rounded">
                Contact Us
              </NavLink>
            </li>
          </ul>
        )}
      </li>

      {/* Solution */}
      <li>
        <button
          onClick={() => setMobileSolutionOpen(!mobileSolutionOpen)}
          className="w-full text-left hover:text-slate-400 flex justify-between items-center py-1"
        >
          Solution
          <span>{mobileSolutionOpen ? "▲" : "▼"}</span>
        </button>
        {mobileSolutionOpen && (
          <ul className="pl-4 mt-1 space-y-1">
            <li>
              <NavLink to="/trash" className="block hover:bg-slate-700 px-2 py-1 rounded">
                Trash
              </NavLink>
            </li>
            <li>
              <NavLink to="/resolve" className="block hover:bg-slate-700 px-2 py-1 rounded">
                Resolve Issue
              </NavLink>
            </li>
            <li>
              <NavLink to="/our-solution" className="block hover:bg-slate-700 px-2 py-1 rounded">
                Our Solution
              </NavLink>
            </li>
          </ul>
        )}
      </li>

      {/* Auth buttons (outline style) */}
      <li>
        <NavLink to="/login" className="btn btn-outline text-white w-full mb-2">
          Sign In
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" className="btn btn-outline text-white w-full">
          Sign Up
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar text-white bg-slate-600 shadow-lg relative z-[10000]">
      {/* Left */}
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[9999] p-2 shadow bg-base-100 text-white rounded-box w-52"
          >
            {mobileLinks}
          </ul>
        </div>
        <img src="/logo.png" alt="Logo" className="h-12 w-12 mr-2" />
      </div>

      {/* Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{desktopLinks}</ul>
      </div>

      {/* Right side */}
      <div className="navbar-end space-x-2">
        {!user ? (
          <>
            <Link to="/login">
              <button className="btn btn-outline text-white border-white hover:bg-white hover:text-black">
                Sign In
              </button>
            </Link>
            <Link to="/register">
              <button className="btn btn-outline text-white border-white hover:bg-white hover:text-black">
                Sign Up
              </button>
            </Link>
          </>
        ) : (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={user.photoURL || "/default-avatar.png"}
                  alt={user.displayName || "User Avatar"}
                  className="object-cover"
                />
              </div>
            </div>
            <ul className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 text-white rounded-box w-52">
              <li className="text-center font-bold">{user.displayName}</li>
              <li>
                <button onClick={handleLogout} className="btn btn-error btn-sm w-full">
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
