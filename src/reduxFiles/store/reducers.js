import { START_TIMER, STOP_TIMER, SAVE_TIME, CLEAR_TIME } from '../action'
import { _formatTime } from '../helpers'

const initialState = {
  recording: false,
  secondsElapsed: 0,
  savedTimes: []
}

function startTimer (state) {
  if (typeof state.secondsElapsed !== 'number') {
    return
  }

  const addedSecond = state.secondsElapsed + 1

  return Object.assign({}, state, {recording: true, secondsElapsed: addedSecond})
};

function stopTimer (state) {
  return Object.assign({}, state, {recording: false})
}

function saveTime (state) {
  if (typeof state.secondsElapsed !== 'number') {
    return
  }

  const newLap = _formatTime(state.secondsElapsed)

  return Object.assign({}, state, {savedTimes: state.savedTimes.concat(newLap)})
}

function clearTime (state) {
  return Object.assign({}, state, {recording: false, secondsElapsed: 0})
}

export default function stopwatch (state = initialState, action = {}) {
  switch (action.type) {
    case START_TIMER:
      return startTimer(state)

    case STOP_TIMER:
      return stopTimer(state)

    case SAVE_TIME:
      return saveTime(state)

    case CLEAR_TIME:
      return clearTime(state)

    default:
      return state
  }
};

// import C from '../constants'
// import { combineReducers } from 'redux'
//
// export const patient = (state=null, action) => {
//   (action.type === C.ADD_PATIENT) ?
//     return action.payload :
//     state
//
// export const startTest = (state=0, action) => {
//   (action.type === C.TEST_STARTED) ?
//     parseInt(action.payload) :
//     state
//
//     const timerMiddleware = store => next => action => {
//       if (action.type === 'START_TIMER') {
//         action.interval = setInterval(() => store.dispatch({ type: 'TICK', currentTime: Date.now() }), 1000);
//       } else if (action.type === 'STOP_TIMER') {
//         clearInterval(action.interval);
//       }
//       next(action);
//     };
//
//     const promiseMiddleware = store => next => action => {
//   // check if the `payload` property is a promise, and, if so, wait for it to resolve
//   if (action.payload && typeof action.payload.then === 'function') {
//     action.payload.then(
//       res => { action.payload = res; next(action); },
//       err => { action.error = err; next(action); });
//   } else {
//     // no-op if the `payload` property is not a promise
//     next(action);
//   }
// };
//
// const stopwatch = (state = {}, action) => {
//   switch (action.type) {
//     case 'START_TIMER':
//       return Object.assign({}, state, {
//          startTime: action.currentTime,
//          elapsed: 0,
//          interval: action.interval
//           });
//     case 'TICK':
//       return Object.assign({}, state, { elapsed: action.currentTime - state.startTime });
//     case 'STOP_TIMER':
//       return Object.assign({}, state, { interval: null });
//       case 'SAVE_TIME':
//       // If there was an error, set the error property on the state
//       if (action.error) {
//         return Object.assign({}, state, { error: action.error });
//       }
//       // Otherwise, clear all the timer state
//       return Object.assign({}, state, { startTime: null, elapsed: null, error: null });
//   }
//   return state;
// };
//
// export default combineReducers({
//   patient
//   selectedSpeed: combineReducers({
//     test1,
//     test2,
//     test3,
//   })
//   fastSpeed: combineReducers({
//     test1,
//     test2,
//     test3
//   })
// })
//
// const middleware = redux.applyMiddleware(timerMiddleware, promiseMiddleware);
// const store = redux.createStore(stopwatch, middleware);
