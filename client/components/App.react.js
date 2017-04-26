import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './App.scss';
import ProductList from './ProductList.react';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: false,
      loadLimit: 20,
    }
  }

  componentDidMount() {
    axios.get(this.props.feedUrl)
      .then((response) => {
        this.originalData = response.data;
        this.setState({results: this.originalData.results});
      });
  }

  _updateLoadLimit(event) {
    if(!!this.state.results && (this.state.loadLimit < this.state.results.length)) {
      this.setState({loadLimit: this.state.loadLimit + 20 })
    }
  }

  _sort(key) {
    let outputArray = this.state.results;
    outputArray.sort((a, b) => {
      return (a[key] < b[key]) ? -1 : (a[key] > b[key] ? 1 : 0);
    });
    this.setState({results: outputArray});
  }

  _sortAlphabetically() {
    this._sort('productName');
  }

  _sortByLowestPrice() {
    this._sort('productPrice');
  }

  render() {
    if(!this.state.results) {
      return (<span>Loading</span>);
    }
    return (
      <div className="app-main row">
        <div className="title small-12">
          <h1 className="text-center">Our Products</h1>
          <p className="text-center">
            <span>Sort by: </span>
            <a onClick={this._sortByLowestPrice.bind(this)}>Lowest Price</a> | <a onClick={this._sortAlphabetically.bind(this)}> Alphabetically</a>
          </p>
        </div>
        <ProductList results={this.state.results} loadLimit={this.state.loadLimit} />
        <button onClick={this._updateLoadLimit.bind(this)} className="button expanded" disabled={this.state.loadLimit > this.state.results.length}>Load More</button>
      </div>
    )
  }
}

App.propTypes = {
  feedUrl: PropTypes.string.isRequired
};
