import Article from "./Article";
import classes from "./ArticleList.module.scss";

const ArticleList = (props) => {
  return (
    <>
      <small className={classes.articleList__category}>Latest {props.category} News</small>
      {props.articles.slice(0, props.limit).map((article) => (
        <Article
          key={article.id}
          id={article.id}
          title={article.title}
          description={article.description}
          urlToImage={article.urlToImage}
          author={article.author}
          publishedAt={article.publishedAt}
		  category={props.category}
        />
      ))}
    </>
  );
};

export default ArticleList;
