import PhotoIndex from './photo_index';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';
import { getAllPhotos, getAllUsers } from '../../actions/photo_actions';
import { favoritePhoto } from '../../actions/favorite_actions';

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
    getAllUsers: users => dispatch(getAllUsers(users)),
    favoritePhoto: favData => dispatch(favoritePhoto(favData)),
    getAllFavorites: (user_id) => dispatch(getAllFavorites(user_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);