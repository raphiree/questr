import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import PhotosReducer from './photos_reducer';
import OwnersReducer from './owner_reducer';

const entitiesReducer = combineReducers({
  users: UsersReducer,
  owner: OwnersReducer,
  photos: PhotosReducer,
});

export default entitiesReducer;