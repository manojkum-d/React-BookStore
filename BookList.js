// BookList.js
import React from 'react';

function BookList({ books }) {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {books.map((book) => (
          <li key={book.title}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>{book.description}</p>
            <img src={book.book_image} alt={book.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
