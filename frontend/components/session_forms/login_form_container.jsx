import { loginUser } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import React from 'react';

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors,
    formType: 'login'
  });
};

const mapStateToDispatch = (dispatch, ownProps) => {
  return ({
    processForm: () => dispatch(loginUser())
  });
};

export default connect(mapStateToProps, mapStateToDispatch)(SessionForm);