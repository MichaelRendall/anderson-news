import React, { useEffect } from "react";
import NewsCategories from "../components/newsCategories/NewsCategories";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Anderson News";
  });
  return <NewsCategories />;
};

export default Home;
