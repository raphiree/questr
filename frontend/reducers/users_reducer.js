import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

export default (oldState = {}, action) => {
  let newState = Object.assign({}, oldState);
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, newState, { [action.user.id]: action.user });
    default:
      return oldState;
  }
};