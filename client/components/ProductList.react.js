import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Product from './Product.react';

export default function ProductList(props) {
    return (
      <div className="row small-up-1 medium-up-3 large-up-4 product-item">
        {
          props.results.map((result, index, array) => {
            if(index < props.loadLimit) {
              return (
                <Product data={result} />
              );
            }
          })
        }
      </div>
    );
}

ProductList.propTypes = {
  results: PropTypes.object.isRequired,
  loadLimit: PropTypes.number.isRequired
};
