import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import injectTapEventPlugin from 'react-tap-event-plugin';

import C from './reduxFiles/constants';
import { Provider } from 'react-redux';
import patientData from './reduxFiles/initialState';
import storeFactory from './reduxFiles/store/store';

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={storeFactory}>
    <App />
  </Provider>
    ,
   document.getElementById('root'));
