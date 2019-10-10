import { RECEIVE_INDEXED_IMAGES, RECEIVE_USER_IMAGES } from '../actions/photo_actions';

export default (oldState = {}, action) => {
  let newState = Object.assign({}, oldState);
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_INDEXED_IMAGES:
      return Object.assign({}, newState, action.photos);
    case RECEIVE_USER_IMAGES:
      return Object.assign({}, newState, action.photos);
    default:
      return oldState;
  };
};