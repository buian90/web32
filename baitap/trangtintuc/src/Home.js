import React from 'react';

const Home = ({ articles }) => {
  return (
    <div>
      <h1>Latest Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
