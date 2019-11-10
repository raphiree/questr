import { RECEIVE_MY_FAVS } from '../actions/favorite_actions';

export default (oldState = {}, action) => {
  let newState = Object.assign({}, oldState);
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_MY_FAVS:
      return Object.assign({}, newState, action.user_id);
    default:
      return oldState;
  };
};