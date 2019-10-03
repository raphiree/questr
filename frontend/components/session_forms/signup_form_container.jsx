import { signupUser } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SignupForm from './signup_form';

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors,
    formType: 'Sign Up'
  });
};

const mapStateToDispatch = (dispatch) => {
  return ({
    processSignup: (user) => dispatch(signupUser(user))
  });
};

export default connect(mapStateToProps, mapStateToDispatch)(SignupForm);