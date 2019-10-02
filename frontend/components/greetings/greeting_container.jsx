import Greeting from './greeting';
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

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);