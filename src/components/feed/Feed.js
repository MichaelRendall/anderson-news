import { useState, useCallback, useEffect } from "react";
import classes from "./Feed.module.scss";

import ArticleList from "./ArticleList";
import Spinner from "../UI/Spinner";
import Button from "../UI/Button";

const Feed = (props) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(11);

  const fetchNewsArticles = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const categoryFilter = props.category
        ? "category=" + props.category + "&"
        : "";

      const url =
        "https://newsapi.org/v2/top-headlines?" +
        "country=us&" +
        categoryFilter +
        "apiKey=4f9e413add634fea836fc1dd27c1745d";
      const req = new Request(url);
      const response = await fetch(req);
      const data = await response.json();

      const loadedArticles = [];

      for (const key in data.articles) {
        loadedArticles.push({
          id: key,
          title: data.articles[key].title,
          author: data.articles[key].author,
          description: data.articles[key].description,
          urlToImage: data.articles[key].urlToImage,
          publishedAt: data.articles[key].publishedAt,
        });
      }
      setArticles(loadedArticles);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [props.category]);

  useEffect(() => {
    fetchNewsArticles();
  }, [fetchNewsArticles]);

  const loadMorePostsHandler = () => {
    setLimit(limit + 10);
  };

  let content = <p>No news items to display</p>;

  if (articles.length > 0) {
    const category = props.category ? props.category : "Breaking News";

    content = (
      <ArticleList category={category} articles={articles} limit={limit} />
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <Spinner />;
  }

  return (
    <section className={classes.feed}>
      {content}
      {articles.length > limit + 1 && (
        <Button name="Load More" clicked={loadMorePostsHandler} />
      )}
    </section>
  );
};

export default Feed;
