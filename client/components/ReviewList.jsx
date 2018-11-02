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
    this.setState(prevState => ({ allReviews: !prevState.allReviews }));
  }

  render() {
    const { allReviews } = this.state;
    const { reviews } = this.props;
    if (allReviews) {
      return (
        <div>
          <div>
            {reviews.map(review => <ReviewListEntry key={review._id} review={review} />)}
          </div>
          <div>
            <button type="button" className="moreReviewsbutton" onClick={() => this.toggleAllReviews()}>Less Reviews</button>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div>
          {reviews.slice(0, 2).map(review => <ReviewListEntry key={review._id} review={review} />)}
        </div>
        <div>
          {reviews.length > 2 ? <button className="moreReviewsbutton" type="button" onClick={() => this.toggleAllReviews()}>More Reviews</button> : null}
        </div>
      </div>
    );
  }
}

ReviewList.propTypes = {
  reviews: propTypes.instanceOf(Array).isRequired,
};

export default ReviewList;
