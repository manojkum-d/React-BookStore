import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header';
import BookSearch from './BookSearch';
import BookList from './BookList';
import BookReviewForm from './BookReviewForm';
import BookReviews from './BookReviews';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const handleClearSearch = () => {
    setSearchResults([]); // Reset searchResults to an empty array to display all books
    setSearchTerm(''); // Clear the search term
  };

  useEffect(() => {
    // Fetch books from the NY Times API when the component mounts
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `https://api.nytimes.com/svc/books/v3/lists/2019-01-20/hardcover-fiction.json?api-key=QTd4H7HDVpLKhqIqtV42NmAthrt8ub4b`
        );

        if (response.status === 200) {
          const bookList = response.data.results.books;
          setSearchResults(bookList);
        }
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const handleSearch = (searchTerm) => {
    // Filter the books based on the search term
    const filteredBooks = searchResults.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredBooks);
  };

  const handleReviewSubmit = (review) => {
    setReviews([...reviews, review]);
  };

  const handleFetchBooks = async () => {
    try {
      const response = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/2019-01-20/hardcover-fiction.json?api-key=QTd4H7HDVpLKhqIqtV42NmAthrt8ub4b`
      );

      if (response.status === 200) {
        const bookList = response.data.results.books;
        setSearchResults(bookList);
      }
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <div className="App">
      <Header />
      <BookSearch onSearch={handleSearch} onFetchBooks={handleFetchBooks} onClearSearch={handleClearSearch} />
      <BookList books={searchResults} />
      <BookReviewForm onSubmit={handleReviewSubmit} />
      {/* <BookReviews reviews={reviews} /> */}
    </div>
  );
}

export default App;