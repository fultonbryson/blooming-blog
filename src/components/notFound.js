import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Error 404</h2>
      <h4>Not all who wander are lost, but you sure are!</h4>
      <Link to='/'>Back to Home...</Link>
    </div>
  );
};

export default NotFound;
