import PhotoIndex from './photo_index';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';
import { getAllPhotos, getAllUsers } from '../../actions/photo_actions';

const mapStateToProps = (state) => {
  return ({ 
    currentUser: state.entities.users[state.session.id],
    photos: state.entities.photos,
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: user => dispatch(logoutUser(user)),
    getAllPhotos: photos => dispatch(getAllPhotos(photos)),
    getAllUsers: users => dispatch(getAllUsers(users))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);