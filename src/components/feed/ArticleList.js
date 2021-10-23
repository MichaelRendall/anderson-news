import Article from "./Article";
import classes from "./ArticleList.module.scss";

const ArticleList = (props) => {
  return (
    <>
      <small className={classes.articleList__category}>{props.category}</small>
      {props.articles.map((article) => (
        <Article
          key={article.id}
          id={article.id}
          title={article.title}
          description={article.description}
          urlToImage={article.urlToImage}
          author={article.author}
          publishedAt={article.publishedAt}
        />
      ))}
    </>
  );
};

export default ArticleList;
