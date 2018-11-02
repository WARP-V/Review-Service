import React from 'react';
import propTypes from 'prop-types';
import styles from './style.css';

const OverallStars = ({ averageRating }) => (
  <span className={styles.overallstars}>
    {[{ id: 'a' }, { id: 'b' }, { id: 'c' }, { id: 'd' }, { id: 'e' }].map((star, index) => (averageRating > index
      ? <span key={star.id}>&#9733;</span> : <span key={star.id}>&#9734;</span>))}
  </span>
);

OverallStars.propTypes = {
  averageRating: propTypes.number.isRequired,
};

export default OverallStars;
