import PhotoStream from './photo_stream';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';
import { getUser, getUserPhotos } from '../../actions/photo_actions';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.entities.users[state.session.id],
    ownerPhotos: state.entities.photos,
    pageOwner: state.entities.owner.username,
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: user => dispatch(logoutUser(user)),
    getUser: id => dispatch(getUser(id)),
    getUserPhotos: id => dispatch(getUserPhotos(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoStream);