import { useEffect, useState } from "react";
import logo from "/logo.png";

import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import Modal from "./Modal";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Navbar Scrolling Handler
    const scrollHandler = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.addEventListener("scroll", scrollHandler);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <details>
          <summary>Menu</summary>
          <ul className="p-2 bg-white">
            <li>
              <Link to="/menu">All</Link>
            </li>
            <li>
              <a>Burger</a>
            </li>
            <li>
              <a>Fries</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Offers</a>
      </li>
      <li>
        <details>
          <summary>Services</summary>
          <ul className="p-2 bg-white">
            <li>
              <a>Take In</a>
            </li>
            <li>
              <a>Home Delivery</a>
            </li>
          </ul>
        </details>
      </li>
    </>
  );
  return (
    <header className="max-w-screen-2xl container mx-auto fixed z-50 top-0 left-0 right-0 ">
      <div
        className={`navbar lg:px-24 ${isSticky ? "shadow-md bg-white transition-all duration-300 ease-in-out" : ""}`}
      >
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {/* Search Button */}
          <button className="btn btn-ghost btn-circle hidden sm:flex">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          {/* Cart Items */}
          <label
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle mr-3 hidden sm:flex items-center justify-center"
          >
            <div className="indicator">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          {/* Button */}
          <a
            onClick={() => document.getElementById("my_modal").showModal()}
            className="btn border-none rounded-full text-white bg-green hover:bg-gray-300 hover:text-black px-6 gap-2 flex items-center"
          >
            <FaRegUser /> Login
          </a>
          <Modal />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
