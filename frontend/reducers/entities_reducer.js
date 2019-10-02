import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import SessionReducer from './session_reducer';

const entitiesReducer = combineReducers({
  users: UsersReducer,
});

export default entitiesReducer;