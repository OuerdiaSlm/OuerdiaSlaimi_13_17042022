import React from "react"
import { Link } from "react-router-dom";
import './headerNav.css';
import logo from '../../assets/argentBankLogo.png';

  function Header() {
    return (
      <div className="global-div-header">
        <header className="">
          <div className="Barre-navigation">
            <img src={logo} className="logo" alt="" />
              <ul className="Barre-text">  
                <li className="headerNav-li">Sign in</li>
              </ul>
          </div>
        </header>
      </div>
    )
  }
  export default Header;