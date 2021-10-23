import classes from "./NewsCategory.module.scss";

const NewsCategory = (props) => {
  return <li className={classes.category}>{props.name}</li>;
};

export default NewsCategory;
