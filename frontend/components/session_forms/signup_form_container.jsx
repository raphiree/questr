import { signupUser, loginUser, clearError } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SignupForm from './signup_form';

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    formType: 'Sign Up'
  });
};

const mapStateToDispatch = (dispatch) => {
  return ({
    processSignup: (user) => dispatch(signupUser(user)),
    processLogin: (user) => dispatch(loginUser(user)),
    clearError: () => dispatch(clearError()),
  });
};

export default connect(mapStateToProps, mapStateToDispatch)(SignupForm);