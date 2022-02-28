import {React} from "react";
import { Link } from "react-router-dom";
import './header.css';
import argentBanqueLogo from "../../images/argentBankLogo.png"

function Header() {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/" >
        <img
          className="main-nav-logo-image"
          src={argentBanqueLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" to="/login">
          <i className="fa fa-user-circle"></i>
          <span> Sign in</span>
        </Link>
      </div>
    </nav> 
  );
}

export default Header;
