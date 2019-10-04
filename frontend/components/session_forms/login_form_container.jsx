import { verifyUser, loginUser, clearError } from '../../actions/session_actions';
import { connect } from 'react-redux';
import LoginForm from './login_form';

const mapStateToProps = (state) => {
  return ({
    verified: state.session.verified,
    errors: state.errors.session,
    formType: 'Log In'
  });
};

const mapStateToDispatch = (dispatch) => {
  return ({
    verifyUser: (username) => dispatch(verifyUser(username)),
    processLogin: (user) => dispatch(loginUser(user)),
    clearError: () => dispatch(clearError()),
  });
};

export default connect(mapStateToProps, mapStateToDispatch)(LoginForm);