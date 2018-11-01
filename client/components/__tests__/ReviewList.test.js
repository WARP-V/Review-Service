import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReviewList from '../ReviewList';
import ReviewListEntry from '../ReviewListEntry';

Enzyme.configure({ adapter: new Adapter() });

const dummyReviews = [{}, {}, {}];

describe('<ReviewList /> Functionality', () => {
  it('should initially not have allReviews status', () => {
    const reviewList = shallow(<ReviewList reviews={dummyReviews} />);
    expect(reviewList.state('allReviews')).toBeFalsy();
  });

  it('should show less than three ReviewListEntry components initially', () => {
    const reviewList = shallow(<ReviewList reviews={dummyReviews} />);
    expect(reviewList.find(ReviewListEntry).length).toBeLessThan(3);
  });

  it('should show all reviews when "More Reviews" is clicked', () => {
    const reviewList = shallow(<ReviewList reviews={dummyReviews} />);
    reviewList.find('button').simulate('click');
    expect(reviewList.state('allReviews')).toBeTruthy();
    expect(reviewList.find(ReviewListEntry).length).toBe(3);
  });

  it('should show less reviews when "Less Reviews" is clicked', () => {
    const reviewList = shallow(<ReviewList reviews={dummyReviews} />);
    reviewList.find('button').simulate('click');
    reviewList.find('button').simulate('click');
    expect(reviewList.state('allReviews')).toBeFalsy();
    expect(reviewList.find(ReviewListEntry).length).toBeLessThan(3);
  });
});
