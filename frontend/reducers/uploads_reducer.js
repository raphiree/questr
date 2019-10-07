import { RECEIVE_UPLOADED_IMAGES } from '../actions/upload_actions';

export default (oldState = [], action) => {
  let newState = Object.assign([], oldState);
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_UPLOADED_IMAGES:
      return Object.assign([], newState, action.uploads)
    default:
      return oldState;
  };
};