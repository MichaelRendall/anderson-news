import classes from "./NewsCategories.module.scss";
import NewsCategory from "./NewsCategory";

const NavCategories = (props) => {
  return (
    <section className={classes.categories__section}>
      <nav className={classes.categories__nav}>
        <ul className={classes.categories__nav_list}>
          <NewsCategory name="Business" param="/business" />
          <NewsCategory name="Entertainment" url="/entertainment" />
          <NewsCategory name="General" url="/general" />
          <NewsCategory name="Health" url="/health" />
          <NewsCategory name="Science" url="/science" />
          <NewsCategory name="Sports" url="/sport" />
          <NewsCategory name="Technology" url="/tech" />
        </ul>
      </nav>
    </section>
  );
};

export default NavCategories;
