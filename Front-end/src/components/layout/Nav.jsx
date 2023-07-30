/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import SearchBook from "../modal/search/SearchBook";
import { NavLink } from "react-router-dom";
const Nav = () => {
  const [bookSerch, setBookSearch] = useState(false);
  return (
    <div className="w-52">
      {/* html start  */}
      {bookSerch ? <SearchBook close={setBookSearch} /> : ""}

      <div className="flex flex-col items-center w-full h-full overflow-hidden text-gray-700 bg-gray-100/70 backdrop-blur-sm rounded">
        <a className="flex items-center w-full px-3 mt-3">
          <span className="text-3xl w-10 text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path
                fill="currentColor"
                d="M25 16c0-1.5-1.2-2.8-2.7-3c-1.1-2.4-3.5-4-6.3-4c-.2 0-.5 0-.7.1C14.7 8.4 13.9 8 13 8c-1.7 0-3 1.3-3 3c0 .4.1.7.2 1.1C9.4 13.2 9 14.5 9 16s.4 2.8 1.2 3.9c-.1.4-.2.7-.2 1.1c0 1.7 1.3 3 3 3c.9 0 1.7-.4 2.3-1.1c.2 0 .5.1.7.1c2.8 0 5.2-1.7 6.3-4c1.5-.2 2.7-1.5 2.7-3zm-12-6c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1zm0 12c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1zm3-1c0-1.7-1.3-3-3-3c-.5 0-1 .1-1.4.4c-.4-.7-.6-1.5-.6-2.4s.2-1.7.6-2.4c.4.3.9.4 1.4.4c1.7 0 3-1.3 3-3c1.9 0 3.4 1 4.3 2.5c-.8.6-1.3 1.5-1.3 2.5s.5 1.9 1.3 2.5C19.4 20 17.9 21 16 21zm6-4c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1z"
              ></path>
              <path
                fill="currentColor"
                d="M16 31c-.2 0-.3 0-.5-.1l-12-7c-.3-.2-.5-.5-.5-.9V9c0-.4.2-.7.5-.9l12-7c.3-.2.7-.2 1 0l12 7l-1 1.7L16 3.2L5 9.6v12.9l11 6.4l11-6.4V15h2v8c0 .4-.2.7-.5.9l-12 7c-.2.1-.3.1-.5.1z"
              ></path>
            </svg>
          </span>

          <span className="ml-2 text-lg  font-bold">Sun Holidays</span>
        </a>
        <div className="w-full px-2">
          <div className="flex flex-col items-center w-full mt-3 border-t border-gray-300">
            <NavLink
              // className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
              className={({ isActive, isPending }) =>
                    isPending ? "flex items-center w-full h-12 px-3 mt-2 rounded loading bg-gray-300" : isActive ? "flex items-center w-full h-12 px-3 mt-2 rounded  bg-gray-300" : "flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
              }
              to="/"
            >
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="ml-2 text-sm font-medium">Dasboard</span>
            </NavLink>
            <span
              className="flex items-center w-full h-12 cursor-pointer px-3 mt-2 rounded hover:bg-gray-300"
              onClick={() => {
                setBookSearch(true);
              }}
            >
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
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
              <span className="ml-2 text-sm font-medium">Search</span>
            </span>
            <a
              className="flex items-center w-full h-12 px-3 mt-2 hover:bg-gray-300 rounded"
              href="#"
            >
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="ml-2 text-sm font-medium">Insights</span>
            </a>
            <a
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
              href="#"
            >
              <svg
                className="w-6 h-6 stroke-inherit"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22 10V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4a2 2 0 1 1 0 4v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2m-2-1.46c-1.19.69-2 1.99-2 3.46s.81 2.77 2 3.46V18H4v-2.54c1.19-.69 2-1.99 2-3.46c0-1.5-.8-2.77-2-3.46V6h16v2.54M11 15h2v2h-2m0-6h2v2h-2m0-6h2v2h-2Z"
                ></path>
              </svg>
              <span className="ml-2 text-sm font-medium">Books</span>
            </a>
            <a
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
              href="#"
            >
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="6" r="4"></circle>
                  <path
                    strokeLinecap="round"
                    d="M15 9a3 3 0 1 0 0-6M5.89 20.584C6.825 20.85 7.882 21 9 21c3.866 0 7-1.79 7-4s-3.134-4-7-4s-7 1.79-7 4c0 .345.077.68.22 1M18 14c1.754.385 3 1.359 3 2.5c0 1.03-1.014 1.923-2.5 2.37"
                  ></path>
                </g>
              </svg>
              <span className="ml-2 text-sm font-medium">Clients</span>
            </a>
          </div>
          <div className="flex flex-col items-center w-full mt-2 border-t border-gray-300">
            <NavLink
              // className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
              className={({ isActive, isPending }) =>
                    isPending ? "flex items-center w-full h-12 px-3 mt-2 rounded loading bg-gray-300" : isActive ? "flex items-center w-full h-12 px-3 mt-2 rounded  bg-gray-300" : "flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
              }
              to="/roomcontroler"
            >
              <svg
                className="w-6 h-6 stroke-inherit"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6 17h1.5v-1.5h9V17H18v-4.15q0-.75-.413-1.337T16.5 10.65V9q0-.825-.588-1.413T14.5 7h-5q-.825 0-1.413.588T7.5 9v1.65q-.675.275-1.088.863T6 12.85V17Zm1.5-3v-1.15q0-.35.25-.6t.6-.25h7.3q.35 0 .6.25t.25.6V14h-9ZM9 10.5v-2h6v2H9ZM4 22q-.825 0-1.413-.588T2 20V4q0-.825.588-1.413T4 2h16q.825 0 1.413.588T22 4v16q0 .825-.588 1.413T20 22H4Zm0-2h16V4H4v16Zm0 0V4v16Z"
                ></path>
              </svg>
              <span className="ml-2 text-sm font-medium">Room</span>
            </NavLink>
            <a
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
              href="#"
            >
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              <span className="ml-2 text-sm font-medium">Settings</span>
            </a>
            <a
              className="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
              href="#"
            >
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              <span className="ml-2 text-sm font-medium">Messages</span>
              <span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
            </a>
          </div>
        </div>
        <NavLink
              // className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
              className={({ isActive, isPending }) =>
                    isPending ? "bg-gray-200 w-full flex py-5 px-2 absolute bottom-0" : isActive ? "bg-slate-300 w-full flex py-5 px-2 absolute bottom-0" : "bg-gray-200 w-full flex py-5 px-2 absolute bottom-0"
              }
              
              to="/user"
        >
          <svg
            className="w-6 h-6 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="ml-2 text-sm font-medium">Account</span>
        </NavLink>
      </div>
      {/* html end  */}
    </div>
  );
};

export default Nav;
