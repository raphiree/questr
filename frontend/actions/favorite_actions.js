import * as FavAPIUtil from '../util/favorite_api_util';

export const RECEIVE_MY_FAVS = 'RECEIVE_MY_FAVS';
export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';


const getMyFavorites = favorites => {
  return ({
    type: RECEIVE_MY_FAVS,
    favorites
  })
}

const getNewFavorite = favorite => {
  return ({
    type: RECEIVE_FAVORITE,
    favorite
  })
}

export const favoritePhoto = formData => dispatch => {
  return (
    FavAPIUtil.favoritePhoto(formData).then(
      (favorites) => dispatch(getMyFavorites(favorites))
    ));
};

export const unfavoritePhoto = formData => dispatch => {
  return (
    FavAPIUtil.unfavoritePhoto(formData).then(
      favorites => dispatch(getMyFavorites(favorites))
    ));
};

export const getAllFavorites = user_id => dispatch => {
  return (
    FavAPIUtil.getAllFavorites(user_id).then(
      favorites => dispatch(getMyFavorites(favorites))
    ));
};