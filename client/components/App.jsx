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
          <span className="reviewOversight">
            Reviews (
            {this.state.reviews.length}
            )
          </span>
          <span>
            <svg className="overallArrow" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d={this.state.open ? "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" : "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"} /><path fill="none" d="M0 0h24v24H0V0z"/></svg>
          </span>
          <span>
            <OverallStars className="overallStars" averageRating={this.state.averageRating} />
          </span>
        </button>
        <ReviewList reviews={this.state.reviews} />
      </div>
    );
  }
}

export default App;

//            <svg className="upward-arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
//            <svg className="upward-arrow" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>
