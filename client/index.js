import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.react';

const DATA_URL = 'https://joefresh-marketing-dev.s3.amazonaws.com/developer-interview/full-list.json';

ReactDOM.render(<App feedUrl={DATA_URL} />, document.getElementById('app'));
