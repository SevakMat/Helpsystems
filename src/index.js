import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

import store from "./reducer/store"
import {Provider} from "react-redux"

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);
