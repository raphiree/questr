import { signup, login, logout } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = user => {
  return ({
    type: RECEIVE_CURRENT_USER,
    user
  });
};

const logoutCurrentUser = (user) => {
  return ({
    type: LOGOUT_CURRENT_USER,
    user
  });
};

const receiveErrors = () => {
  return ({
    type: RECEIVE_ERRORS,
  });
};

export const signupUser = formUser => dispatch => {
  signup(formUser).then(user => dispatch(receiveCurrentUser(user)));
};

export const loginUser = formUser => dispatch => {
  login(formUser).then(user => dispatch(receiveCurrentUser(user)));
};

export const logoutUser = formUser => dispatch => {
  logout(formUser).then(user => dispatch(logoutCurrentUser(user)));
};