import { RECEIVE_MY_FAVS, RECEIVE_FAVORITE } from '../actions/favorite_actions';

export default (oldState = {}, action) => {
  let newState = Object.assign({}, oldState);
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_MY_FAVS:
      newState = Object.assign({}, action.favorites);
      return newState;
    case RECEIVE_FAVORITE:
      return Object.assign({}, newState, action.favorite);
    default:
      return oldState;
  };
};