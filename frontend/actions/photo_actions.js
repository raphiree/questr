import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_UPLOADED_IMAGES = 'RECEIVE_UPLOADED_IMAGES';
export const RECEIVE_USER_IMAGES = 'RECEIVE_USER_IMAGES';
export const RECEIVE_PAGE_OWNER = 'RECEIVE_PAGE_OWNER';

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

const receivePageOwner = owner => {
  return ({
    type: RECEIVE_PAGE_OWNER,
    owner
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
      user => dispatch(receivePageOwner(user))
  ));
};

export const getUserPhotos = id => dispatch => {
  return (
    PhotoAPIUtil.getUserPhotos(id).then(
      photos => dispatch(receiveUserImages(photos))
  ));
};