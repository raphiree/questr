import { RECEIVE_PAGE_OWNER, RECEIVE_ALL_USERS } from '../actions/photo_actions';

export default (oldState = {}, action) => {
  let newState = Object.assign({}, oldState);
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PAGE_OWNER:
      return Object.assign({}, newState, action.owner);
    case RECEIVE_ALL_USERS:
      return Object.assign({}, newState, action.users)
    default:
      return oldState;
  }
};