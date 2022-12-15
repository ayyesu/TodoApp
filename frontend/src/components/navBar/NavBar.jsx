import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <nav className="flex justify-center">
      <div>
        <Link to="/">
          <h1 className="text-3xl font-bold underline">ToDo</h1>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
