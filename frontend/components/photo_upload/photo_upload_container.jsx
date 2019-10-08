import PhotoUpload from './photo_upload';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';
import { uploadPhotos } from '../../actions/photo_actions';

const mapStateToProps = (state) => {
  return ({ 
    currentUser: state.entities.users[state.session.id],
    previews: state.entities.uploads
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: user => dispatch(logoutUser(user)),
    uploadPhotos: uploads => dispatch(uploadPhotos(uploads))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoUpload);