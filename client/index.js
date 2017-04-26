import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.react';
import config from './config';

ReactDOM.render(<App feedUrl={config.feedUrl} />, document.getElementById('app'));
