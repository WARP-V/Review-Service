import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReviewListEntry from '../ReviewListEntry';

Enzyme.configure({ adapter: new Adapter() });

describe('<ReviewListEntry /> Functionality', () => {
  const review = {
    _id: '5bd7ccece4bb1334484ef1f7',
    shoeID: '554724-071',
    author: 'Keren Gloria',
    title: 'Lorem Ipsum',
    stars: 4,
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    createdAt: '2034-07-26T13:16:43.646Z',
    __v: 0,
  };

  it('should not be in the fullreview state when component gets first rendered', () => {
    const reviewListEntry = shallow(<ReviewListEntry review={review} />);
    expect(reviewListEntry.state('more')).toBeFalsy();
  });

  it('should toggle state when button is clicked', () => {
    const reviewListEntry = shallow(<ReviewListEntry review={review} />);
    reviewListEntry.find('button').simulate('click');
    expect(reviewListEntry.state('more')).toBeTruthy();
  });

  it('should toggle state when button is clicked a second time', () => {
    const reviewListEntry = shallow(<ReviewListEntry review={review} />);
    expect(reviewListEntry.state('more')).toBeFalsy();
    reviewListEntry.find('button').simulate('click');
    expect(reviewListEntry.state('more')).toBeTruthy();
    reviewListEntry.find('button').simulate('click');
    expect(reviewListEntry.state('more')).toBeFalsy();
  });
});
