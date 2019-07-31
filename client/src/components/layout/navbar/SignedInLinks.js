import React from "react";
import { Link } from "react-router-dom";
function SignedInLinks() {
  return (
    <div className="navbar-start">
      <Link to="/" className="navbar-item">
        Home
      </Link>

      <Link to="/profile" className="navbar-item">
        Profile
      </Link>

      <Link to="/mycourses" className="navbar-item">
        My Courses
      </Link>
    </div>
  );
}

export default SignedInLinks;
