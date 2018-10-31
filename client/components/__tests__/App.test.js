import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import OverallStars from '../OverallStars';
import ReviewList from '../ReviewList';

Enzyme.configure({ adapter: new Adapter() });

describe('<App /> Component', () => {
  it('should render the <App /> component', () => {
    const app = shallow(<App />);
    expect(app.exists()).toBeTruthy();
  });

  it('should render an inner div with className ".reviews"', () => {
    const app = shallow(<App />);
    const divs = app.find('div').first();
    expect(divs.find('.reviews').length).toBeGreaterThan(0);
  });

  it('should render an "OverallStars" and "ReviewList" component', () => {
    const app = shallow(<App />);
    expect(app.find(OverallStars).length).toBe(1);
    expect(app.find(ReviewList).length).toBe(1);
  });
});

describe('<App /> Functionality', () => {
  it('should create App component with getReviews method', () => {
    const app = shallow(<App />);
    expect(app.state('open')).toBeFalsy();
    app.find('.overallButton').simulate('click');
    expect(app.state('open')).toBeTruthy();
  });
});
