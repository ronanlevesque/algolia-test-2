import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import AppContainer from './containers/AppContainer';
import 'normalize.css';
import './index.css';

ReactDOM.render(
  <Provider store={store()}>
   <AppContainer />
 </Provider>,
  document.getElementById('root')
);
