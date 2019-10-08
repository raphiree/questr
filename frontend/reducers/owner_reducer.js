import { RECEIVE_PAGE_OWNER } from '../actions/photo_actions';

export default (oldState = {}, action) => {
  let newState = Object.assign({}, oldState);
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PAGE_OWNER:
      return Object.assign({}, newState, action.owner);
    default:
      return oldState;
  }
};