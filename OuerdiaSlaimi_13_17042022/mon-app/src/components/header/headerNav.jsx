import React from "react"
import './headerNav.css';
import logo from '../../assets/argentBankLogo.png';

  function Header() {
    return (
      <div className="global-div-header">
        <header className="">
          <div className="Barre-navigation">
            <img src={logo} className="logo" alt="" />
            <ul className="Barre-text">  
              <li className="headerNav-li">Profil</li>
              <li className="headerNav-li">Sign out</li>
            </ul>
          </div>
        </header>
      </div>
    )
  }
  export default Header;