import React from "react";
import logo from "../assets/ON.png"
const Navbar = () => {
  return (
    <div className="bg-neutral-900 text-slate-300 h-20">
      <nav className="navbar flex  justify-between">
       <img src={logo} alt="On time" className="mx-6 mt-2 "/>
    

      </nav>
    </div>
  );
};

export default Navbar;
