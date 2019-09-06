import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers/index.js';

let http = require("http");
setInterval(function() {
    http.get("https://mockup-interviews.herokuapp.com/");
}, 600000); // every 5 minutes (300000)

ReactDOM.render(<Provider store={createStore(reducers)}>
				  <App/>
				</Provider>,
				document.getElementById('root'));
