import { NavLink } from "react-router-dom";
import classes from "./NavItem.module.scss";

const NavItem = (props) => {
  return (
    <li className={classes.navItem}>
      <NavLink
        className={`${classes.navItem__link} ${
          props.feature === "button" ? classes.navItem__link_button : ""
        }`}
        to={props.url}
        activeClassName={classes.active}
        exact
      >
        {props.name}
      </NavLink>
    </li>
  );
};

export default NavItem;
