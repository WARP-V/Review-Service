import React from 'react';
import ReviewList from './ReviewList';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      shoeID: '554724-071',
      reviews: [],
    };
    this.getReviews = this.getReviews.bind(this);
    this.getReviews();
  }

  getReviews() {
    const { shoeID } = this.state;
    axios.get(`/${shoeID}/reviews`)
      .then((response) => {
        const reviews = response.data;
        this.setState({ reviews });
      });
  }

  render() {
    return (
      <div>
        <div>Rendering App worked</div>
        <ReviewList />
      </div>
    );
  }
}

export default App;
