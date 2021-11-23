import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>BulbaBLOG</h1>

      <div className='navbar__links'>
        <Link to='/'>Home</Link>
        <Link to='/create'>New Entry</Link>
      </div>
    </div>
  );
};

export default Navbar;
