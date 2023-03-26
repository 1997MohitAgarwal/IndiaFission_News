import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <ul className="navbar-nav mr-auto mx-4">
          <li className="nav-item active">
            <Link className="nav-link mr-4 font-weight-bold text-light" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-danger" to="/entertainment">Entertainment</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-danger" to="/food">Food</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-danger" to="/health" >Health</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-danger" to="/science">Science</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-danger" to="/sports">Sports</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-danger" to="/technology">Technology</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-danger" to="/business">Business</Link>
          </li>
        </ul>
        <div className="navbar-brand mx-3">
          <img src="india.jpg" width="45" height="45" alt="" />
        </div>
        <b> <div className="navbar-brand">WORLD FISSION</div></b>
      </nav>
    </>
  )
}