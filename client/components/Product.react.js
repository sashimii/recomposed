import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Product.scss';

export default function Product(props) {
  const data = props.data;
  const badgeClass = (data.productBadgeString).toLowerCase().replace(' ', '-');
  return (
    <div className="product-item column">
      <div className="card">
        <img src={data.thumbnails['b3']}/>
        <div className="card-section">
          <p className={"label " + badgeClass}>{data.productBadgeString}</p>
          <h4>{data.productName}</h4>
          <span className="price-information"><span className="dollar-sign">$</span><span className="price-amount">{data.productPrice}</span></span>
          <br/>
          <span>
            {
              data.availableColors ? data.availableColors.map((color) => {
                return (
                  <img className="available-colors" src={color} />
                )
              }) : null
            }
          </span>
        </div>
      </div>
    </div>
  );

}


Product.propTypes = {
  data: PropTypes.object.isRequired
};
