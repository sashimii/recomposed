import React, {Component} from 'react';

import './App.scss';

import ProductList from './ProductList.react';

import axios from 'axios';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: false,
      loadLimit: 20,
    }
  }

  componentDidMount() {
    axios.get(this.props.feedUrl)
      .then((response) => {
        this.setState({data: response.data});
      });
  }

  _updateLoadLimit(event) {
    if(!!this.state.data && (this.state.loadLimit < this.state.data.results.length)) {
      this.setState({loadLimit: this.state.loadLimit + 20 })
    }
  }


  render() {
    if(!this.state.data) {
      return (<span>Loading</span>);
    }
    return (
      <div className="app-main row">
        <h1>{this.state.data.categoryName}</h1>
        <ProductList results={this.state.data.results} loadLimit={this.state.loadLimit} />
        <button onClick={this._updateLoadLimit.bind(this)} className="button expanded" disabled={this.state.loadLimit > this.state.data.results.length}>Load More</button>
      </div>
    )
  }
}
