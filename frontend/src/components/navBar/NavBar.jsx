import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const handleSignOut = () => {
    //signout the user
  };
  const handleSignUp = () => {
    //signup the user
  };
  const handleSignIn = () => {
    //signin the user
  };

  return (
    <nav className="bg-black h-20">
      <div className="container flex justify-between">
        <div className="mt-2">
          <Link className="mt-5" to="/">
            <h1 className="text-4xl no-underline text-blue-500 font-bold">ToDo</h1>
          </Link>
          <span className="text-white">User: Daniel</span>
        </div>
        <div className="flex mt-5">
          <button
            className="text-white m-1 h-10 rounded-lg p-2"
            onClick={() => handleSignOut}
          >
            SIGNOUT
          </button>
          <button
            className="text-white m-1 h-10 rounded-lg p-2"
            onClick={() => handleSignUp}
          >
            SIGNUP
          </button>
          <button
            className="text-white m-1 h-10 rounded-lg p-2"
            onClick={() => handleSignIn}
          >
            SIGNIN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
