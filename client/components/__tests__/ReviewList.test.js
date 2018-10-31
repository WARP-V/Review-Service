import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReviewList from '../ReviewList';
import ReviewListEntry from '../ReviewListEntry';

Enzyme.configure({ adapter: new Adapter() });

const dummyReviews = [
  {
    '_id': '5bd7ccece4bb1334484ef1f7',
    'shoeID': '554724-071',
    'author': 'Keren Gloria',
    'title': 'Lorem Ipsum',
    'stars': 4,
    'body': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    'createdAt': '2034-07-26T13:16:43.646Z',
    '__v': 0,
  },
  {
    '_id': '5bd7ccece4bb1334484ef1f8',
    'shoeID': '554724-071',
    'author': 'Milo Heuer',
    'title': 'Lorem Ipsum',
    'stars': 2,
    'body': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    'createdAt': '2031-12-25T00:40:08.022Z',
    '__v': 0
  },
  {
    '_id': '5bd7ccece4bb1334484ef1f9',
    'shoeID': '554724-071',
    'author': 'Marcus Varnadoe',
    'title': 'Lorem Ipsum',
    'stars': 3,
    'body': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    'createdAt': '2033-06-19T16:26:17.837Z',
    '__v': 0,
  }
];

describe('<ReviewList /> Functionality', () => {
  it('should toggle allReviews when clicked', () => {
    const reviewList = shallow(<ReviewList reviews={dummyReviews} />);
    expect(reviewList.state('allReviews')).toBeFalsy();
    expect(reviewList.find('ReviewListEntry').length).toBeLessThan(3);
    reviewList.find('button').simulate('click');
    expect(reviewList.state('allReviews')).toBeTruthy();
    expect(reviewList.find('ReviewListEntry').length).toBe(3);
    reviewList.find('button').simulate('click');
    expect(reviewList.state('allReviews')).toBeFalsy();
    expect(reviewList.find('ReviewListEntry').length).toBeLessThan(3);
  });
});
