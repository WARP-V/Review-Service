import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ReviewStars from '../ReviewStars';


Enzyme.configure({ adapter: new Adapter() });

describe('<ReviewStars /> Components', () => {
  it('should render five stars within one span', () => {
    const reviewStars = shallow(<ReviewStars rating={4} />);
    expect(reviewStars.find('span').length).toBe(6);
  });
});
