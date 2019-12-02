import { RECEIVE_PHOTO_COMMENTS, ADD_PHOTO_COMMENTS } from '../actions/comment_actions';

export default (oldState = {}, action) => {
  let newState = Object.assign({}, oldState);
  Object.freeze(oldState);
  switch (action.type) {
    case ADD_PHOTO_COMMENTS:
      newState = Object.values(newState).concat(action.comments)
      return newState;
    case RECEIVE_PHOTO_COMMENTS:
      return newState;
    default:
      return oldState;
  };
};