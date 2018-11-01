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
    const more = !this.state.more;
    this.setState({ more });
  }

  render() {
    return (
      <div className="review">
        <p>{this.props.review.title}</p>
        <div>
          <span className="reviewstars">
            <ReviewStars rating={this.props.review.stars} />
          </span>
          <span className="authoranddate">
            {this.props.review.author}
            -
            {moment(this.props.review.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
        {this.props.review.body.length > 200 // 245 characters in real app => also change line 38
          ? (
            <div>
              <p>
                {this.state.more ? this.props.review.body : this.props.review.body.slice(0, 200)}
                {this.state.more ? null : <span>...</span>}
              </p>
              <div>
                {this.state.more ? <button type="button" onClick={() => this.toggleMore()}>Less</button> : <button type="button" onClick={() => this.toggleMore()}>More</button>}
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
