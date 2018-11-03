import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ShippingAndReturns from '../ShippingAndReturns';

Enzyme.configure({ adapter: new Adapter() });

describe('<ShippingAndReturns /> Functionality', () => {
  it('should toggle class when clicked', () => {
    const shippingAndReturns = shallow(<ShippingAndReturns />);
    expect(shippingAndReturns.state('open')).toBeFalsy();
    shippingAndReturns.find('button').simulate('click');
    expect(shippingAndReturns.state('open')).toBeTruthy();
  });
});
