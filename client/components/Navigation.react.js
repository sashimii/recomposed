import React from 'react';
import { compose, withState, withHandlers } from 'recompose';

const NavItem = ({ item }) => <li><a href="#">{ item }</a></li>;

const Navigation = ({ items }) =>
  <ul className="menu">
    {
      items.map(
        (item) =>
          <NavItem item={item}/>
      )
    }
  </ul>;

export default Navigation;
