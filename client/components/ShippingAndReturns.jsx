import React from 'react';

class ShippingAndReturns extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
    this.toggleSize = this.toggleSize.bind(this);
  }

  toggleSize() {
    this.setState(prevState => ({ open: !prevState.open }));
  }

  render() {
    const { open } = this.state;
    return (
      <div className={open ? 'allShipping' : 'shipping'}>
        <button className="overallButton" type="button" onClick={() => this.toggleSize()}>
          <span className="shippingTitle">
            Free Shipping & Returns
          </span>
          <span>
            <svg className="overallArrow" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
              <path d={open ? 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z' : 'M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'} />
              <path fill="none" d="M0 0h24v24H0V0z" />
            </svg>
          </span>
        </button>
        <div>
          <p>
            Free standard shipping and 60-day free returns, only with NikePlus. Exclusions apply.
            <u>Learn more.</u>
          </p>
          <ul>
            <li>Standard / Arrives 2-4 Business Days</li>
            <li>Two-Day / Arrives 2-3 Business Days</li>
            <li>Next-Day / Arrives 1-2 Business Days</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ShippingAndReturns;
