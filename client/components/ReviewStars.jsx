import React from 'react';
import propTypes from 'prop-types';

const ReviewStars = ({ rating }) => (
  <span className="reviewstars">
    {[null, null, null, null, null].map((star, index) => {
      return rating > index ? <span key={index}>&#9733;</span> : <span>&#9734;</span>;
    })}
  </span>
);

ReviewStars.propTypes = {
  rating: propTypes.number.isRequired,
};

export default ReviewStars;
