import PhotoUpload from './photo_upload';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';
import { uploadImages } from '../../actions/upload_actions';

const mapStateToProps = (state) => {
  return ({ 
    currentUser: state.entities.users[state.session.id],
    previews: state.entities.uploads
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: user => dispatch(logoutUser(user)),
    uploadImages: uploads => dispatch(uploadImages(uploads))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoUpload);