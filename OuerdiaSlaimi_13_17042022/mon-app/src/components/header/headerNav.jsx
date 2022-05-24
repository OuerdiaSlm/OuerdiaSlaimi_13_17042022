import React from "react"
import './headerNav.css';
import logo from '../../assets/argentBankLogo.png';
import { Link } from 'react-router-dom';

  function Header() {
    return (
      <div className="global-div-header">
        <header className="">
          <div className="Barre-navigation">
            <img src={logo} className="logo" alt="" />
            {/* <Link to={"/"}>Sign in</Link> */}
          </div>
        </header>
      </div>
    )
  }
  export default Header;