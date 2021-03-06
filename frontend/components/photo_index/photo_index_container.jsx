import PhotoIndex from './photo_index';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';
import { getAllPhotos, loadMorePhotos } from '../../actions/photo_actions';
import { favoritePhoto, unfavoritePhoto, getAllFavorites } from '../../actions/favorite_actions';

const mapStateToProps = (state) => {
  return ({ 
    currentUser: Object.values(state.entities.users)[0],
    photos: state.entities.photos,
    userFavorites: state.entities.userFavorites,
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: user => dispatch(logoutUser(user)),
    getAllPhotos: photos => dispatch(getAllPhotos(photos)),
    loadMorePhotos: displayed => dispatch(loadMorePhotos(displayed)),
    favoritePhoto: favData => dispatch(favoritePhoto(favData)),
    unfavoritePhoto: favData => dispatch(unfavoritePhoto(favData)),
    getAllFavorites: (user_id) => dispatch(getAllFavorites(user_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);