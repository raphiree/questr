import { signupUser } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors,
    formType: 'signup'
  });
};

const mapStateToDispatch = (dispatch, ownProps) => {
  return ({
    processForm: () => dispatch(signupUser())
  });
};

export default connect(mapStateToProps, mapStateToDispatch)(SessionForm);