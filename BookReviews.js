// BookReviewForm.js
import React, { useState } from 'react';

function BookReviewForm({ onSubmit }) {
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(review);
    setReview('');
  };

  return (
    <div>
      <h2>Submit a Review</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your review here..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default BookReviewForm;
