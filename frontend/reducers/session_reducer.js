import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

export default (oldState = { id: null }, action) => {
  let newState = Object.assign({}, oldState);
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, newState, { id: action.user.id });
    case LOGOUT_CURRENT_USER:
      return Object.assign({}, newState, { id: null });
    default:
      return oldState;
  }
}