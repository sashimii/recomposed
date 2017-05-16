import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import marked from 'marked';


const Article = ({ title, hero, content }) =>
  <article>
    <h1>{ title }</h1>
    {
      hero && <img src={hero} />
    }
    <Content {...content} />
  </article>;


const Content = ({type, raw}) =>
  <div
    className="article-content"
    dangerouslySetInnerHTML={
      type === 'html' ?  { __html: raw} :
      type === 'md' ? { __html: marked(raw)} :
      null
    }
  />

export default Article;
