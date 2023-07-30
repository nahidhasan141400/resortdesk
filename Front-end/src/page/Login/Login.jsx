/* eslint-disable no-unused-vars */
import React from "react";

const Login = () => {
  return (
    <section className="w-full relative min-h-screen h-screen">
      <div className="w-full h-full relative grid grid-cols-1 md:grid-cols-2">
        <div className="w-full h-full background-p relative  justify-center items-center hidden md:flex">
          <div className="px-20 py-8 font-ariba bg-[aliceblue]/50 backdrop-blur-sm shadow-md">
            <h1 className="font-bold text-4xl">Welcome</h1>
          </div>
        </div>
        {/* form start  */}
        <div className="w-full relative h-full flex justify-center items-center p-2">
          <form className="relative bg-white shadow-md rounded-md overflow-hidden">
            <div className="w-full bg-gray-200 text-center p-2 mb-10">
              <span className="text-3xl w-full flex justify-center text-blue-500 mb-3">
                
                Sailor Moon Resort
              </span>
              <h1 className="text-xl font-ariba mb-2">Login</h1>
            </div>
            <div className="w-full relative p-2">
              <input
                type="text"
                className="input-primary input input-bordered w-full"
                placeholder="username"
              />
              <input
                type="password"
                className="input-primary input input-bordered w-full mt-3"
                placeholder="password"
              />
              <div className="mt-3">
                <button className="btn btn-primary ">
                  {" "}
                  <span>
                    <IcBaselineKey />
                  </span>{" "}
                  Login
                </button>
              </div>
            </div>
            <div className="w-full relative bg-blue-400 p-1 mt-2">

            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;

// icone

export function IcBaselineLogin(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5l-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"
      ></path>
    </svg>
  );
}

export function IcBaselineKey(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M21 10h-8.35A5.99 5.99 0 0 0 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6a5.99 5.99 0 0 0 5.65-4H13l2 2l2-2l2 2l4-4.04L21 10zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3s3 1.35 3 3s-1.35 3-3 3z"
      ></path>
    </svg>
  );
}
