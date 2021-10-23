import classes from "./Button.module.scss";

const Button = (props) => (
  <button className={classes.button} onClick={props.clicked}>
    {props.name}
  </button>
);

export default Button;
