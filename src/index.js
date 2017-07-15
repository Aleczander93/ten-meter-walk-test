import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import injectTapEventPlugin from 'react-tap-event-plugin';

// import { Provider } from 'react-redux';
// import { createStore } from 'redux'
// import { reducer as formReducer } from 'redux-form'

// const reducers = {
//   form: formReducer     // <---- Mounted at 'form'
// }
//
// const store = createStore(reducer)


injectTapEventPlugin();

ReactDOM.render(
  // <Provider store={store}>
    <App />
  // </Provider>
    ,
   document.getElementById('root'));
