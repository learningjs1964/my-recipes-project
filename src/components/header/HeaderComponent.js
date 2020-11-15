import React from "react";
import "./header.css";

function HeaderComponent(props) {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Recipe Book
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navContainer" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                All Recipes<span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => props.showSignInForm()}
              >
                Sign In
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" tabIndex="-1">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default HeaderComponent;
