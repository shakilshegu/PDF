import React from "react";
import {Link } from "react-router-dom";

const Navbar = () => {
  return (
      <nav className="flex justify-around p-3 border-b border-zinc-800 items-center bg-slate-800 text-zinc-200">
        <Link to="/">
          <h1 className="text-red-600 text-3xl">PDF</h1>
        </Link>
        <ul className="flex gap-6">
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
        </ul>
      </nav>
  );
};

export default Navbar;
