import React from 'react';
import propTypes from 'prop-types';
import styles from './style.css';

const ReviewStars = ({ rating }) => (
  <span className={styles.reviewstars}>
    {[{ id: 'a' }, { id: 'b' }, { id: 'c' }, { id: 'd' }, { id: 'e' }].map((star, index) => (rating > index
      ? <span key={star.id}>&#9733;</span> : <span key={star.id}>&#9734;</span>
    ))}
  </span>
);

ReviewStars.propTypes = {
  rating: propTypes.number.isRequired,
};

export default ReviewStars;
