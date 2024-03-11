// @ts-nocheck
import React, { useState, useRef, useEffect } from "react";
import avatar from "../images/nar2.jpg";
import logo from "../images/logo6.jpg";
import { Link } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Header = ({ getSearchtext }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [searchtext, setSearchText] = useState("");
  const menuRef = useRef(null);
  const menuBtnRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target) &&
      !menuBtnRef.current.contains(e.target)
    ) {
      setMenuOpened(false);
    }
  };
  const handleSearch = (search) => {
    setSearchText(search);
    getSearchtext(search);
  };
  return (
    <nav
      className="w-full  flex fixed items-center justify-between h-[80px]  bg-white p-3 border-2  m-0"
      aria-label="Global"
    >
      <Link to={`/`} style={{ textDecoration: "none" }}>
        <div className="flex justify-center items-center ">
          <img className="h-16 w-16 m-1 max-md:mr-2" src={logo} alt="logo" />
          <p className="max-md:hidden lg:flex text-3xl mx-3 font-madimi">
            Golden Tracks
          </p>
        </div>
      </Link>
      <div className="max-sm:hidden md:flex relative flex-1 mr-10">
        <input
          className=" appearance-none hover:border-2  hover:border-neutral-200 pl-10  transition-colors rounded-md w-full py-2 px-7 text-gray-800 
          leading-tight focus:outline-none   focus:shadow-outline "
          id="search"
          type="text"
          placeholder="Search..."
          value={searchtext}
          onChange={(e) => handleSearch(e.target.value)}
        />

        <div className="absolute left-0 inset-y-0 flex items-center">
          <MagnifyingGlassIcon className="h-8 w-8 text-stone-300 cursor-pointer mr-5 " />
        </div>
      </div>

      <div className="flex  p-2 justify-between items-center">
        <div className="flex mr-2 relative">
          <div className="flex absolute justify-center items-center right-[-3px] top-[-8px] w-4 h-4 bg-red-600 rounded-full text-amber-100 text-xs">
            1
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
        </div>

        <div
          className="flex cursor-pointer relative p-2 transition-all duration-300 ease-out"
          style={{ backgroundColor: menuOpened ? "rgb(226 232 240)" : "white" }}
          onClick={() => setMenuOpened(!menuOpened)}
        >
          <div className="flex mx-3  justify-center items-center ">
            <div ref={menuBtnRef} className="max-lg:hidden xl:flex">
              Ahmed Sarhan
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 ml-2 max-lg:hidden xl:flex"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
          <div>
            <img
              className="inline-block h-9 w-9 rounded-full ring-2 ring-white"
              src={avatar}
              alt="avatar"
            />
          </div>
          {menuOpened && (
            <div
              ref={menuRef}
              className={`flex flex-col absolute left-0 top-[55px] border-2  z-100 bg-white transition-all duration-900 ease-out 
              ${menuOpened && "animate-show"}  ${!menuOpened && "animate-hide"}
                          `}
            >
              <h4 className="text-slate-500 py-2 px-2 hover:bg-slate-100 ">
                Settings
              </h4>
              <h4 className="text-slate-500 py-2 px-2 hover:bg-slate-100">
                Profile
              </h4>
              <div className="flex justify-center items-center px-2 hover:bg-slate-100">
                <h4 className="text-slate-500 py-2 mr-10">Notifications</h4>
                <div className="flex justify-center items-center w-4 h-4 bg-red-600 rounded-full text-amber-100 text-xs py-2 mr-2">
                  3
                </div>
              </div>
              <h4 className="text-slate-500 py-2  px-2  hover:bg-slate-100">
                Help
              </h4>
              <h4 className="text-slate-500 py-3 px-2 border-t-2 hover:bg-slate-100">
                Logout
              </h4>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
