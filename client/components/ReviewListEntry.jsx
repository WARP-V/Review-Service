import React from 'react';
import propTypes from 'prop-types';
import moment from 'moment';
import ReviewStars from './ReviewStars';


class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      more: false,
    };
    this.toggleMore = this.toggleMore.bind(this);
  }

  toggleMore() {
    this.setState(prevState => ({ more: !prevState.more }));
  }

  render() {
    const { review } = this.props;
    const { more } = this.state;
    return (
      <div className="review">
        <p className="reviewTitle">{review.title}</p>
        <div>
          <span className="reviewstars">
            <ReviewStars rating={review.stars} />
          </span>
          <span className="reviewDateAndAuthor">
            {review.author}
            -
            {moment(review.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
        {review.body.length > 200 // 245 characters in real app => also change line 38
          ? (
            <div className="reviewBody">
              <p>
                {more ? review.body : review.body.slice(0, 200)}
                {more ? null : <span>...</span>}
              </p>
              <div>
                {more
                  ? (
                    <button type="button" onClick={() => this.toggleMore()}>
                      <span className="moreButton">Less</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
                        <path d="M0 0h24v24H0z" fill="none" />
                      </svg>
                    </button>
                  )
                  : (
                    <button type="button" onClick={() => this.toggleMore()}>
                      <span className="moreButton">More</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                        <path fill="none" d="M0 0h24v24H0V0z" />
                      </svg>
                    </button>
                  )
                }
              </div>
            </div>
          ) : <p>{review.body}</p>}
      </div>
    );
  }
}

ReviewListEntry.propTypes = {
  review: propTypes.instanceOf(Object).isRequired,
};

export default ReviewListEntry;
