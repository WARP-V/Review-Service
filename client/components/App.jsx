import axios from 'axios';
import React from 'react';
import ReviewList from './ReviewList';
import OverallStars from './OverallStars';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      shoeID: '554724-071',
      reviews: [],
      averageRating: 0,
      open: false,
    };

    this.open = false;
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
    const open = !this.state.open;
    this.setState({ open });
  }

  calculateAverageRating(reviews) {
    const averageRating = reviews.reduce((av, rev) => av + (rev.stars / reviews.length), 0);
    this.setState({ averageRating });
  }

  render() {
    return (
      <div className={this.state.open ? 'all reviews' : 'reviews'}>
        <button className='overallButton' type='button' onClick={() => this.toggleSize()}>
          <span>
            Reviews (
            {this.state.reviews.length}
            )
          </span>
          <span>
            <OverallStars averageRating={this.state.averageRating} />
          </span>
          <span className="arrow arrow-down" data-css-1mqb043 />
        </button>
        <ReviewList reviews={this.state.reviews} />
      </div>
    );
  }
}

export default App;
