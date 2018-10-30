import React from 'react';
import propTypes from 'prop-types';

const OverallStars = ({ averageRating }) => (
  <span className="overallstars">
    {[null, null, null, null, null].map((star, index) => {
      return averageRating > index ? <span key={index}>&#9733;</span> : <span>&#9734;</span>;
    })}
  </span>
);

OverallStars.propTypes = {
  averageRating: propTypes.number.isRequired,
};

export default OverallStars;
