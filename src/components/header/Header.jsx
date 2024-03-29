import {React} from "react";
import { Link } from "react-router-dom";
import './header.css';
import argentBanqueLogo from "../../images/argentBankLogo.png"

function Header(props) {

  const logoutButton = () => {
    localStorage.removeItem('bankToken');
    window.location.href = "./";
  }; 

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
        { props.connected === false ? 
        <div>
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i> Sign in
          </Link>  
        </div> : 
        <div>
          <Link className="main-nav-item" to="/profile">
            <i className="fa fa-user-circle"></i> Tony </Link>
          <button onClick={logoutButton} className="main-nav-item nav-button">
            <i className="fa fa-sign-out"></i> Sign Out </button>
        </div> }
      </div>
    </nav> 
  );
}

export default Header;
