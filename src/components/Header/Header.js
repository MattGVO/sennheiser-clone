import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="Header">
      <div className="header-content">
        <Link to="/">
          <h1>NHEISER</h1>
        </Link>
        <div className="links">
          <h4>Headphones & Soundbars</h4>
          <svg
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            aria-labelledby="cartIconTitle"
            stroke="#000"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="miter"
            fill="none"
            color="#000"
          >
            {" "}
            <title id="cartIconTitle">Cart</title>{" "}
            <path d="M6 6h15l-1.5 9h-12z" /> <circle cx="9" cy="19" r="1" />{" "}
            <circle cx="18" cy="19" r="1" /> <path d="M6 6H3" />{" "}
          </svg>
          <svg
            // className="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="24px"
            viewBox="0 0 24 24"
            aria-labelledby="searchIconTitle"
            stroke="#000"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="miter"
            fill="none"
            color="#000"
          >
            {" "}
            <title id="searchIconTitle">Search</title>{" "}
            <path
              transform="scale(-1,1) translate(-20,0)"
              d="M14.4121122,14.4121122 L20,20"
            />{" "}
            <circle cx="10" cy="10" r="6" />{" "}
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;
