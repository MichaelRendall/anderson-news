import classes from "./Hamburger.module.scss";

const DrawerToggle = (props) => (
  <div className={classes.hamburger} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default DrawerToggle;
