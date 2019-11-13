import { RECEIVE_PHOTO_COMMENTS } from '../actions/comment_actions';

export default (oldState = {}, action) => {
  let newState = Object.assign({}, oldState);
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PHOTO_COMMENTS:
      newState = Object.assign({}, newState, action.comments);
      return newState;
    default:
      return oldState;
  };
};