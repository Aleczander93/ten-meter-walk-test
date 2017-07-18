import C from './constants'
import appReducer from './store/reducers'
import initialState from './initialState.json'
import { createStore } from 'redux'
const superagent = require('superagent')

const initialState = (localStorage['redux-store']) ?
	JSON.parse(localStorage['redux-store']) :
	{}

const saveState = () => {
	const state = JSON.stringify(store.getState())
  localStorage['redux-store'] = state
}

const store = storeFactory(initialState)

store.subscribe(() => { console.log(store.getState()); });

store.dispatch({ type: 'INCREMENT' });

store.dispatch({
  type: C.ADD_PATIENT,
  payload: {
    "firstName": "John",
    "lastName": "Doe",
    "deviceUsed":"None",
    "date":"2016-07-17"
  }
})

store.dispatch({ type: 'SAVE_TIME', payload: superagent.post('/save', store.getState()) });

let state = initialState

//initialState

state - appReducer(state, {
  type: C.TEST_STARTED,
  payload: {

  }
})

state - appReducer(state, {
  type: C.TEST_STOPPED,
  payload: {

  }
})

state - appReducer(state, {
  type: C.TEST_STARTED,
  payload: {

  }
})
