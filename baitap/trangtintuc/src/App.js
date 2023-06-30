import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import SearchBar from './SearchBar';
import SortDropdown from './SortDropdown';

const App = () => {
  const [articles, setArticles] = useState([
    { id: 1, title: 'Bài viết 1', timestamp: '2023-06-25T10:00:00Z' },
    { id: 2, title: 'Bài viết 2', timestamp: '2023-06-24T15:30:00Z' },
    { id: 3, title: 'Bài viết 3', timestamp: '2023-06-23T09:45:00Z' },
    // Thêm các bài viết khác tại đây
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSort = (sortOption) => {
    setSortBy(sortOption);
  };

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedArticles = [...filteredArticles].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.timestamp) - new Date(a.timestamp);
    } else if (sortBy === 'oldest') {
      return new Date(a.timestamp) - new Date(b.timestamp);
    }
    return 0;
  });

  return (
    <Router>
      <div>
        <SearchBar onSearch={handleSearch} />
        <SortDropdown onSort={handleSort} />
        <Switch>
          <Route exact path="/">
            <Home articles={sortedArticles} />
          </Route>
          {/* Các đường dẫn khác và component tương ứng */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
