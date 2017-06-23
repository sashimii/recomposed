import React from 'react';
import { compose, withState, withHandlers } from 'recompose';

import './Navigation.scss';

const NavItem = ({ item }) => <li><a href="#">{ item }</a></li>;

const Navigation = ({ items }) =>
  <div>
    <p className="site-title">Sixurb</p>
  </div>;

export default Navigation;
