import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import PhotosReducer from './photos_reducer';
import OwnersReducer from './owner_reducer';
import OwnerPhotoReducer from './owner_photo_reducer';
import FavoritesReducer from './favorites_reducer';
import comments_reducer from './comments_reducer';

const entitiesReducer = combineReducers({
  users: UsersReducer,
  owner: OwnersReducer,
  photos: PhotosReducer,
  ownerPhotos: OwnerPhotoReducer,
  userFavorites: FavoritesReducer,
  photoComments: comments_reducer,
});

export default entitiesReducer;