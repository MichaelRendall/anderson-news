import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import searchIcon from "../../assets/search-icon.svg";
import NavItems from "../nav/NavItems";
import Hamburger from "./Hamburger";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__section}>
        <Hamburger />
      </div>

      <div className={`${classes.header__logo} ${classes.header__section}`}>
        <NavLink to="/">
          <img src={logo} alt="Anderson Post Logo" />
        </NavLink>
      </div>

      <div className={`${classes.header__nav} ${classes.header__section}`}>
        <div className={classes.header__nav_web}>
          <NavItems />
        </div>
        <img src={searchIcon} alt="Search Icon" />
      </div>
    </header>
  );
};

export default Header;
