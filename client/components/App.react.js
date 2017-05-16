import React from 'react';
import { compose, withState, withHandlers } from 'recompose';

import './App.scss';

import Navigation from './Navigation.react';
import Article from './Article.react';

const { Component } = React;

const menuItems = ['About Us', 'Hello world'];

const rawMarkdown = `
## Hello World!

Welcome to my blog

Ain't it wonderful?

Check out this [link](https://www.thestar.com)
`;

const App = () =>
  <div>
    <Navigation items={menuItems} />
    <Article
      title="Hello World!"
      hero="https://garretttonge.files.wordpress.com/2012/08/img_0473.jpg"
      content={
        {
          type: 'md',
          raw: rawMarkdown
        }
      }
    />
  </div>;



export default App;
