import React from 'react';
import propTypes from 'prop-types';
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
    const more = !this.state.more;
    this.setState({ more });
  }

  render() {
    return (
      <div className="review">
        <p className="reviewTitle">{this.props.review.title}</p>
        <div>
          <span className="reviewstars">
            <ReviewStars rating={this.props.review.stars} />
          </span>
          <span className="reviewDateAndAuthor">
            {this.props.review.author}
             -
            {this.props.review.createdAt}
          </span>
        </div>
        {this.props.review.body.length > 200 // 245 characters in real app => also change line 38
          ? (
            <div className="reviewBody">
              <p>
                {this.state.more ? this.props.review.body : this.props.review.body.slice(0, 200)}
                {this.state.more ? null : <span>...</span>}
              </p>
              <div>
                {this.state.more
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
          ) : <p>{this.props.review.body}</p>}
      </div>
    );
  }
}

// ReviewListEntry.propTypes = {
//   review: propTypes.object.isRequired,
// };

export default ReviewListEntry;


// <svg className="overallArrow" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d={this.state.open ? "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" : "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"} /><path fill="none" d="M0 0h24v24H0V0z"/></svg>
