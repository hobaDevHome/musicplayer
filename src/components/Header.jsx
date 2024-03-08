import React, { useState } from "react";
import avatar from "../images/nar2.jpg";
import logo from "../images/logo3.jpg";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <nav
      className="w-full  flex fixed items-center justify-between h-[60px]  p-3 border-2 p-0 m-0"
      aria-label="Global"
    >
      <div className="flex justify-center items-center ">
        <img className="h-12 w-12 m-1 max-md:mr-2" src={logo} alt="logo" />
        <p className="max-md:hidden lg:flex text-3xl mx-3 font-madimi">
          Golden Tracks
        </p>
      </div>
      <div className="max-sm:hidden md:flex relative flex-1 mr-10">
        <input
          className=" appearance-none hover:border-2  hover:border-neutral-200 pl-10  transition-colors rounded-md w-full py-2 px-3 text-gray-800 
          leading-tight focus:outline-none   focus:shadow-outline "
          id="search"
          type="text"
          placeholder="Search..."
        />

        <div className="absolute left-0 inset-y-0 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-4 ml-2 text-gray-400 hover:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
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
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
        </div>
        <div
          className="flex cursor-pointer relative p-2 transition-all duration-300 ease-out"
          style={{ backgroundColor: menuOpened ? "rgb(226 232 240)" : "white" }}
          onClick={() => setMenuOpened(!menuOpened)}
        >
          <div className="flex mx-3 justify-center items-center ">
            <div className="max-lg:hidden xl:flex">Ahmed Sarhan</div>
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
            <>
              <div
                className={`flex flex-col absolute left-0 top-[45px] border-2  z-10 bg-white transition-all duration-900 ease-out 
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
            </>
          )}
        </div>
        {menuOpened && (
          <div
            className="w-screen h-screen absolute top-0 left-0 z-9"
            onClick={() => setMenuOpened(false)}
          >
            till
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
