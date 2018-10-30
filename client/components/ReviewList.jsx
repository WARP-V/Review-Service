import React from 'react';
import propTypes from 'prop-types';
import ReviewListEntry from './ReviewListEntry';


const ReviewList = ({ reviews }) => (
  <div>
    {reviews.map(review => <ReviewListEntry key={review._id} review={review} />)}
  </div>
);

ReviewList.propTypes = {
  reviews: propTypes.array.isRequired,
};

export default ReviewList;
