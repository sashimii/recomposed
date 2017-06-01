import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import './Advertisement.scss'

// const Advertisement = ({width, height}) =>


export default class Advertisement extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(!!window) {
      // window.googletag.cmd.push(function() {
      //   googletag.display("div-gpt-ad-123456789-0");
      // });
      window.googletag.cmd.push(function() {
        googletag.display("div-gpt-ad-123456789-1");
      });
    }
  }

  render() {
    return (
      <div id="div-gpt-ad-123456789-1" className="advert" style={{width: `${this.props.width}px`, height: `${this.props.height}px`}}></div>
    );
  }

}

// export default Advertisement;
