import classes from "./NewsCategory.module.scss";

const NewsCategory = (props) => {
  const activeClass =
    props.activeCategory.toLowerCase() === props.name.toLowerCase()
      ? classes.active
      : "";

  return (
    <li
      className={`${classes.category} ${activeClass}`}
      onClick={props.clicked}
    >
      {props.name}
    </li>
  );
};

export default NewsCategory;
