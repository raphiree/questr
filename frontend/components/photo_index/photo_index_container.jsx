import PhotoIndex from './photo_index';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return { currentUser: state.entities.users[state.session.id] };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: user => dispatch(logoutUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);