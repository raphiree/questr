import * as FavAPIUtil from '../util/favorite_api_util';

export const RECEIVE_MY_FAVS = 'RECEIVE_MY_FAVS';

const getMyFavorites = favorites => {
  return ({
    type: RECEIVE_MY_FAVS,
    favorites
  })
}

export const favoritePhoto = formData => dispatch => {
  return (
    FavAPIUtil.favoritePhoto(formData).then(
      formData => dispatch(getMyFavorites(formData))
    ));
};

export const unfavoritePhoto = formData => dispatch => {
  return (
    FavAPIUtil.unfavoritePhoto(formData).then(
      formData => dispatch(getMyFavorites(formData))
    ));
};