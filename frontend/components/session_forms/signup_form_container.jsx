import { signupUser } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors,
    formType: 'Sign Up'
  });
};

const mapStateToDispatch = (dispatch, ownProps) => {
  return ({
    processForm: (user) => dispatch(signupUser(user))
  });
};

export default connect(mapStateToProps, mapStateToDispatch)(SessionForm);