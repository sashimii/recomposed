import React from 'react';
import { compose, withState, withHandlers } from 'recompose';

import './ContentContainer.scss';


const ContentContainer = ({ children }) =>
  <div className="main-content">
    <div className="main-content-container">{ children }
    </div>
  </div>;


export default ContentContainer;
