import classes from "./NewsCategories.module.scss";
import NewsCategory from "./NewsCategory";

const NavCategories = (props) => {
  return (
    <section className={classes.categories__section}>
      <nav className={classes.categories__nav}>
        <ul className={classes.categories__nav_list}>
          <NewsCategory
            name="Business"
            activeCategory={props.activeCategory}
            clicked={() => props.clicked("business")}
          />
          <NewsCategory
            name="Entertainment"
            activeCategory={props.activeCategory}
            clicked={() => props.clicked("entertainment")}
          />
          <NewsCategory
            name="General"
            activeCategory={props.activeCategory}
            clicked={() => props.clicked("general")}
          />
          <NewsCategory
            name="Health"
            activeCategory={props.activeCategory}
            clicked={() => props.clicked("health")}
          />
          <NewsCategory
            name="Science"
            activeCategory={props.activeCategory}
            clicked={() => props.clicked("science")}
          />
          <NewsCategory
            name="Sports"
            activeCategory={props.activeCategory}
            clicked={() => props.clicked("sports")}
          />
          <NewsCategory
            name="Technology"
            activeCategory={props.activeCategory}
            clicked={() => props.clicked("technology")}
          />
        </ul>
      </nav>
    </section>
  );
};

export default NavCategories;
