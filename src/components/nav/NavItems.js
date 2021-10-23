import NavItem from "./NavItem";
import classes from "./NavItems.module.scss";

const NavItems = (props) => {
  return (
    <nav className={classes.navItems}>
      <ul className={classes.navItems__list}>
        <NavItem name="Newsletter" url="/newsletter" />
        <NavItem name="Sign In" url="/signin" />
        <NavItem name="Subscribe" url="/subscribe" feature="button" />
      </ul>
    </nav>
  );
};

export default NavItems;
