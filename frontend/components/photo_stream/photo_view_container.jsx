import PhotoView from './photo_view';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';
import { getUser, getUserPhotos } from '../../actions/photo_actions';
import { createComment, getComments } from '../../actions/comment_actions';
import { favoritePhoto, unfavoritePhoto, getAllFavorites } from '../../actions/favorite_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.entities.users[state.session.id],
    ownerPhotos: state.entities.ownerPhotos,
    pageOwner: state.entities.owner.username,
    photoId: ownProps.match.params.photo_id,
    ownerId: ownProps.match.params.user_id,
    photoComments: state.entities.photoComments,
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: user => dispatch(logoutUser(user)),
    getUser: id => dispatch(getUser(id)),
    getUserPhotos: id => dispatch(getUserPhotos(id)),
    createComment: comment => dispatch(createComment(comment)),
    getComments: comments => dispatch(getComments(comments)),
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoView);