//import Article from "./Article";
import classes from "./Article.module.scss";

const Article = (props) => {
  let category;
  let description;
  let smallContent;

  const publishedDateTime = new Date(props.publishedAt);
  const currentDateTime = new Date();

  if (props.id === "0") {
    category = "TOP STORY";
    description = <h2>{props.description}</h2>;

    let dateDiff =
      (currentDateTime.getTime() - publishedDateTime.getTime()) / 1000;
    dateDiff /= 60;
    smallContent = Math.abs(Math.round(dateDiff)) + " minutes ago";
  } else {
    let author = "";
    if (props.author) {
      author = props.author + " •";
    }

    const publishDay = publishedDateTime.getDate();
    const publishMonth = publishedDateTime.toLocaleString("default", {
      month: "long",
    });
    const publishYear = publishedDateTime.getFullYear();
    smallContent = `${author} ${publishMonth} ${publishDay}, ${publishYear}`;
  }

  return (
    <article
      className={`${classes.article} ${
        props.id === "0" ? classes.article__topStory : classes.article__subStory
      }`}
      key={props.id}
    >
      <div className={classes.article__img}>
        <img src={props.urlToImage} alt={props.title} />
      </div>
      <div className={classes.article__content}>
        <small className={classes.article__category}>{category}</small>
        <h1>{props.title}</h1>

        {description}
        <small className={classes.article__timestamp}>{smallContent}</small>
      </div>
    </article>
  );
};

export default Article;
