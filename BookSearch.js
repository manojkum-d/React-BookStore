// BookSearch.js
import React, { useState } from 'react';

function BookSearch({ onSearch, onFetchBooks, onClearSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm('');
    onClearSearch();
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
        <button type="button" onClick={onFetchBooks}>Fetch Books</button>
        <button type="button" onClick={handleClear}>Clear Search</button> {/* Add the Clear Search button */}
      </form>
    </div>
  );
}

export default BookSearch;
