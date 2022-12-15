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
            <h1 className="text-4xl no-underline text-white font-bold">ToDo</h1>
          </Link>
          <span className="text-white">User: Daniel</span>
        </div>
        <div className="flex mt-5">
          <button
            className="bg-red-700 m-1 h-10 rounded-lg p-2"
            onClick={() => handleSignOut}
          >
            SignOut
          </button>
          <button
            className="bg-green-700 m-1 h-10 rounded-lg p-2"
            onClick={() => handleSignUp}
          >
            SignUp
          </button>
          <button
            className="bg-blue-700 m-1 h-10 rounded-lg p-2"
            onClick={() => handleSignIn}
          >
            SignIn
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
