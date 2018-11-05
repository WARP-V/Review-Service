import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import App from '../App';
import OverallStars from '../OverallStars';
import ReviewList from '../ReviewList';
import styles from '../style.css';

// jest.mock('../__mocks__/request');

// import * as MockApp from '../App';


Enzyme.configure({ adapter: new Adapter() });

describe('<App /> Component', () => {
  it('should render the <App /> component', () => {
    const app = shallow(<App />);
    expect(app.exists()).toBeTruthy();
  });

  it('should render an inner div', () => {
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
  it('should toggle state when Reviews button is clicked', () => {
    const app = shallow(<App />);
    expect(app.state('open')).toBeFalsy();
    app.find('.overallButton').simulate('click');
    expect(app.state('open')).toBeTruthy();
  });

  it('should toggle the class of the div when the Reviews button is clicked once', () => {
    const app = shallow(<App />);
    console.log(`.${styles.allreviews}`);
    expect(app.find('.reviews').length).toBeGreaterThan(0);
    expect(app.find('.allReviews').length).toBe(0);
    app.find('.overallButton').simulate('click');
    expect(app.find('.reviews').length).toBe(0);
    expect(app.find('.allReviews').length).toBeGreaterThan(0);
  });

  it('should toggle the class of the div when the Reviews button is clicked a second time', () => {
    const app = shallow(<App />);
    app.find('.overallButton').simulate('click');
    app.find('.overallButton').simulate('click');
    expect(app.find('.reviews').length).toBeGreaterThan(0);
    expect(app.find('.allReviews').length).toBe(0);
  });

  // it('getReviews should receive an Array of Reviews when called', () => {
  //   render(<App />);
  //   // console.log('============>', App.prototype.getReviews);
  //   expect.assertions(1);
  //   return MockApp.prototype.getReviews().then(response => (
  //     expect(Array.isArray(response)).toBeTruthy()
  //   ));
  // });

  it('componentDidMount should be invoked after mounting', () => {
    sinon.spy(App.prototype, 'componentDidMount');
    mount(<App />);
    expect(App.prototype.componentDidMount.callCount).toBeGreaterThan(0);
  });

  it('getReviews should be invoked after mounting', () => {
    sinon.spy(App.prototype, 'getReviews');
    expect(App.prototype.getReviews.callCount).toBe(0);
    mount(<App />);
    expect(App.prototype.getReviews.callCount).toBeGreaterThan(0);
  });
});
