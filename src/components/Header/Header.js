import React from "react";
import { Link } from "react-router-dom";
import * as Icon from 'react-feather'
import Logo from "./Logo.svg";

function Header() {
  return (
    <header className="Header">
      <div className="header-content">
        <Link to="/">
          <img id="logo" src={Logo} alt="NENNHEISER Logo" draggable={false}/>
        </Link>
        <div className="links">
          <h4>Headphones & Soundbars</h4>
          <Icon.ShoppingCart/>
          <Icon.Search/>
        
        </div>
      </div>
    </header>
  );
}

export default Header;
