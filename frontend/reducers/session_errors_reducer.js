import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

export default (oldState = [], action) => {
  let newState = Object.assign({}, oldState);
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return Object.assign({}, newState, action.errors);
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, newState, []);
    default:
      return oldState;
  }
}