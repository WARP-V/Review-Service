import React from 'react';
import propTypes from 'prop-types';
import ReviewListEntry from './ReviewListEntry';


class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: false,
    };
    this.toggleAllReviews = this.toggleAllReviews.bind(this);
  }

  toggleAllReviews() {
    const allReviews = !this.state.allReviews;
    this.setState({ allReviews });
  }

  render() {
    if (this.state.allReviews) {
      return (
        <div>
          <div>
            {this.props.reviews.map(review => <ReviewListEntry key={review._id} review={review} />)}
          </div>
          <div>
            <button type="button" onClick={() => this.toggleAllReviews()}>Less Reviews</button>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div>
          {this.props.reviews.slice(0, 2).map(review => <ReviewListEntry key={review._id} review={review} />)}
        </div>
        <div>
          {this.props.reviews.length > 2 ? <button type="button" onClick={() => this.toggleAllReviews()}>More Reviews</button> : null}
        </div>
      </div>
    );
  }
}

ReviewList.propTypes = {
  reviews: propTypes.array.isRequired,
};

export default ReviewList;

// const ReviewList = ({ reviews }) => (

// );
