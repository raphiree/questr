import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, VERIFY_USERNAME } from '../actions/session_actions';

export default (oldState = { id: null, verified: false }, action) => {
  let newState = Object.assign({}, oldState);
  Object.freeze(oldState);
  switch (action.type) {
    case VERIFY_USERNAME:
      return Object.assign({}, newState, { verified: true });
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, newState, { id: action.user.id });
    case LOGOUT_CURRENT_USER:
      return Object.assign({}, newState, { id: null, verified: false });
    default:
      return oldState;
  }
}