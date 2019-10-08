import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import PhotosReducer from './photos_reducer';

const entitiesReducer = combineReducers({
  users: UsersReducer,
  photos: PhotosReducer,
});

export default entitiesReducer;