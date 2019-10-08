import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_UPLOADED_IMAGES = 'RECEIVE_UPLOADED_IMAGES';
export const RECEIVE_USER_IMAGES = 'RECEIVE_USER_IMAGES';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUploadedImages = formData => {
  return ({
    type: RECEIVE_UPLOADED_IMAGES,
    formData
  })
}

const receiveUserImages = photos => {
  return ({
    type: RECEIVE_USER_IMAGES,
    photos
  })
}

const receiveUser = user => {
  return ({
    type: RECEIVE_USER,
    user
  })
}

export const uploadPhotos = formData => dispatch => {
  return (
    PhotoAPIUtil.postPhoto(formData).then(
      photo => dispatch(receiveUploadedImages(photo))
  ));
};

export const getUser = id => dispatch => {
  return (
    PhotoAPIUtil.getUser(id).then(
      photos => dispatch(receiveUserImages(photos))
  ));
};

export const getUserPhotos = id => dispatch => {
  return (
    PhotoAPIUtil.getUserPhotos(id).then(
      user => dispatch(receiveUser(user))
  ));
};