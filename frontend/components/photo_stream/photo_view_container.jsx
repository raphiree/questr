import PhotoView from './photo_view';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';
import { getUser, getUserPhotos } from '../../actions/photo_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.entities.users[state.session.id],
    ownerPhotos: state.entities.ownerPhotos,
    pageOwner: state.entities.owner.username,
    photoId: ownProps.match.params.photo_id,
    ownerId: ownProps.match.params.user_id,
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: user => dispatch(logoutUser(user)),
    getUser: id => dispatch(getUser(id)),
    getUserPhotos: id => dispatch(getUserPhotos(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoView);