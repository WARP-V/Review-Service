import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OverallStars from '../OverallStars';


Enzyme.configure({ adapter: new Adapter() });

describe('<OverallStars />', () => {
  it('should render the OverallStars component', () => {
    const overallStars = shallow(<OverallStars averageRating={3} />);
    expect(overallStars.exists()).toBeTruthy();
  });
});
