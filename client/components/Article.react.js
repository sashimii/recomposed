import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import Advertisement from './Advertisement.react';
import marked from 'marked';

import './Article.scss';


const Article = ({ title, hero, content }) =>
  <article>
    {
      hero &&
      <div className="hero-image-container">
        <img className="hero-image" src={hero} />
      </div>
    }
    <Heading>{ title }</Heading>
    <div className="article-content align-center">
      <div className="large-6 columns">
        <Content {...content} />
      </div>
    </div>
  </article>;

const Heading = ({ children }) =>
  <div className="article-headline">
    <h1>{ children }</h1>
  </div>;


const Content = ({type, raw}) =>
  <span
    dangerouslySetInnerHTML={
      type === 'html' ?  { __html: raw} :
      type === 'md' ? { __html: marked(raw)} :
      null
    }
  />

export default Article;
