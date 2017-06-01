import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import Advertisement from './Advertisement.react';
import marked from 'marked';

import './Article.scss';


const Article = ({ title, hero, content }) =>
  <article>
    <h1 className="heading">{ title }</h1>
    {
      hero && <img src={hero} />
    }
    <Advertisement />
    <div className="article-content">
      <Content {...content} />
    </div>
  </article>;


const Content = ({type, raw}) =>
  <span
    dangerouslySetInnerHTML={
      type === 'html' ?  { __html: raw} :
      type === 'md' ? { __html: marked(raw)} :
      null
    }
  />

export default Article;
