import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import NewsCategories from "../components/newsCategories/NewsCategories";
import Feed from "../components/feed/Feed";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Anderson News";
  });

  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const category = queryParams.get("category") || '';

  const changeCategoryHandler = (cat) => {
    history.push({
      pathname: location.pathname,
      search: `?category=${cat}`,
    });
  };

  return (
    <>
      <NewsCategories
        activeCategory={category}
        clicked={changeCategoryHandler}
      />
      <Feed category={category} />
    </>
  );
};

export default Home;
