import React, { useState, useEffect } from "react";

import { ALL_ARTICLES, CREATE_ARTICLE } from "./queries";
import { request } from "./fetch";

const App = () => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    const res = await request(ALL_ARTICLES);
    const json = await res.json();
    console.log("res:", json.data);
    setArticles(json.data.articles);
  };

  const createArticle = async () => {
    const variables = {
      article: {
        title: "HELLO",
        body: "BODY"
      }
    };
    const res = await request(CREATE_ARTICLE, variables);
    const json = await res.json();
    console.log("create:", json.data);
    await fetchArticles();
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      <button onClick={createArticle}>Create Article</button>
      <div>
        {articles.length > 0 &&
          articles.map(article => <li key={article.id}>{article.title}</li>)}
      </div>
    </div>
  );
};

export default App;
