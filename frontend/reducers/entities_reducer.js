import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import UploadsReducer from './uploads_reducer';

const entitiesReducer = combineReducers({
  users: UsersReducer,
  uploads: UploadsReducer,
});

export default entitiesReducer;