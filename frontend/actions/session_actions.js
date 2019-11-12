import { signup, login, logout, checkUser } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const VERIFY_USERNAME = "VERIFY_USERNAME";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveCurrentUser = user => {
  return ({
    type: RECEIVE_CURRENT_USER,
    user
  });
};

const verifyUsername = username => {
  return ({
    type: VERIFY_USERNAME,
    username
  });
};

const logoutCurrentUser = (user) => {
  return ({
    type: LOGOUT_CURRENT_USER,
    user
  });
};

const receiveErrors = errors => {
  return ({
    type: RECEIVE_ERRORS,
    errors
  });
};

const clearErrors = () => {
  return ({
    type: CLEAR_ERRORS,
  })
}

export const signupUser = formUser => dispatch => {
  signup(formUser).then(
    user => dispatch(receiveCurrentUser(user)),
    error => dispatch(receiveErrors(error.responseJSON))
  );
};

export const verifyUser = username => dispatch => {
  checkUser(username).then(
    username => dispatch(verifyUsername(username.username)),
    error => dispatch(receiveErrors(error.responseJSON))
  );
};

export const loginUser = formUser => dispatch => {
  login(formUser).then(
    user => dispatch(receiveCurrentUser(user)),
    error => dispatch(receiveErrors(error.responseJSON))
  );
};

export const logoutUser = formUser => dispatch => {
  logout(formUser).then((user) => (dispatch(logoutCurrentUser(user), error=>(console.log("hi"))))
  )
};

export const clearError = () => dispatch => {
  dispatch(clearErrors());
}