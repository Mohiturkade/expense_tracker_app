import "./Header.css";

import MenuIcon from "../../../assets/icons/menu.png";
import ProfileIcon from "../../../assets/icons/profile.png";

function Header({ toggleMenu }) {

  return (
    <header className="header">

      <div
        className="header-left"
        onClick={toggleMenu}
      >

        <img
          src={MenuIcon}
          alt="menu icon"
          className="menu-icon"
        />

        <h2 className="app-title">Financial Serenity</h2>

      </div>

      <img
        src={ProfileIcon}
        alt="profile icon"
        className="profile-image"
      />

    </header>
  );
}    

export default Header;
