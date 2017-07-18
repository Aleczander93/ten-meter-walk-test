// import C from '../constants'
// import { combineReducers } from 'redux';
// import {reducer as formReducer} from 'redux-form';

//
// export default rootReducer;
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'

import reducer from '../reducers/stopwatch'

const middleware = applyMiddleware(logger())

export default createStore(reducer, middleware)
