import axios from 'axios';
import React from 'react';
import ReviewList from './ReviewList';
import OverallStars from './OverallStars';
import ShippingAndReturns from './ShippingAndReturns';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      shoeID: '554724-071',
      reviews: [],
      averageRating: 0,
      open: false,
    };

    this.getReviews = this.getReviews.bind(this);
    this.calculateAverageRating = this.calculateAverageRating.bind(this);
    this.calculateAverageRating = this.calculateAverageRating.bind(this);
    this.toggleSize = this.toggleSize.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    const { shoeID } = this.state;
    axios.get(`/${shoeID}/reviews`)
      .then((response) => {
        const reviews = response.data;
        this.calculateAverageRating(reviews);
        this.setState({ reviews });
      });
  }

  toggleSize() {
    this.setState(prevState => ({ open: !prevState.open }));
  }

  calculateAverageRating(reviews) {
    const averageRating = reviews.reduce((av, rev) => av + (rev.stars / reviews.length), 0);
    this.setState({ averageRating });
  }

  render() {
    const { open } = this.state;
    const { reviews } = this.state;
    const { averageRating } = this.state;
    return (
      <div id="review-model">
        <ShippingAndReturns />
        <div className={open ? 'allReviews' : 'reviews'}>
          <button className="overallButton" type="button" onClick={() => this.toggleSize()}>
            <span className="reviewOversight">
              Reviews (
              {reviews.length}
              )
            </span>
            <span>
              <svg className="overallArrow" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                <path d={open ? 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z' : 'M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'} />
                <path fill="none" d="M0 0h24v24H0V0z" />
              </svg>
            </span>
            <span>
              <OverallStars className="overallStars" averageRating={averageRating} />
            </span>
          </button>
          <ReviewList reviews={reviews} />
        </div>
      </div>
    );
  }
}

export default App;
