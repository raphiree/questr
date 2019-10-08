import { RECEIVE_UPLOADED_IMAGES, RECEIVE_USER_IMAGES, RECEIVE_USER } from '../actions/photo_actions';

export default (oldState = {}, action) => {
  let newState = Object.assign({}, oldState);
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_UPLOADED_IMAGES:
      return Object.assign({}, newState, action.formData);
    case RECEIVE_USER_IMAGES:
      return Object.assign({}, newState, action.photos);
    case RECEIVE_USER:
      return Object.assign({}, newState, action.user);
    default:
      return oldState;
  };
};