import React, { useState } from 'react';

const SortDropdown = ({ onSort }) => {
  const [sortOption, setSortOption] = useState('newest');

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    onSort(e.target.value);
  };

  return (
    <select value={sortOption} onChange={handleSortChange}>
      <option value="newest">Newest</option>
      <option value="oldest">Oldest</option>
    </select>
  );
};

export default SortDropdown;
