import React from 'react';
import propTypes from 'prop-types';
import ReviewStars from './ReviewStars';

const ReviewListEntry = ({ review }) => (
  <div className="review">
    <p>{review.title}</p>
    <div>
      <span className="reviewstars">
        <ReviewStars rating={review.stars} />
      </span>
      <span className="authoranddate">
        {review.author}
         -
        {review.createdAt}
      </span>
    </div>
    {review.body.length > 245
      ? (
        <p>
          {review.body.slice(0, 245)}
          <span>...</span>
        </p>
      ) : <p>{review.body}</p>}
  </div>
);

ReviewListEntry.propTypes = {
  review: propTypes.object.isRequired,
};

export default ReviewListEntry;
