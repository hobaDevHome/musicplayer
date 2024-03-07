import React, { useState } from "react";
import avatar from "../images/nar2.jpg";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(true);
  return (
    <nav
      className="w-full  flex fixed items-center justify-between h-[50px]  p-3 border-2 p-0 m-0"
      aria-label="Global"
    >
      <div class="relative flex-1 mr-10">
        <input
          class="appearance-none hover:border-2  hover:border-neutral-200 pl-10  transition-colors rounded-md w-full py-2 px-3 text-gray-800 
          leading-tight focus:outline-none   focus:shadow-outline "
          id="search"
          type="text"
          placeholder="Search..."
        />

        <div class="absolute left-0 inset-y-0 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-4 ml-2 text-gray-400 hover:text-gray-500"
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
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
        </div>
        <div
          className="flex cursor-pointer relative p-2"
          style={{ backgroundColor: menuOpened ? "rgb(226 232 240)" : "white" }}
          onClick={() => setMenuOpened(!menuOpened)}
        >
          <div className="flex mx-3 ">Ahmed Sarhan</div>
          <div>
            <img
              className="inline-block h-7 w-7 rounded-full ring-2 ring-white"
              src={avatar}
              alt="avatar"
            />
          </div>
          {menuOpened && (
            <div className="flex flex-col absolute left-0 top-[45px] border-2   z-10 bg-white">
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
