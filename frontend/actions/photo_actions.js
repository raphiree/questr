import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_INDEXED_IMAGES = 'RECEIVE_INDEXED_IMAGES';
export const RECEIVE_USER_IMAGES = 'RECEIVE_USER_IMAGES';
export const RECEIVE_PAGE_OWNER = 'RECEIVE_PAGE_OWNER';

const receiveUploadedImages = photos => {
  return ({
    type: RECEIVE_INDEXED_IMAGES,
    photos
  })
}

const receiveAllImages = photos => {
  return ({
    type: RECEIVE_INDEXED_IMAGES,
    photos
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

export const getAllPhotos = () => dispatch => {
  return (
    PhotoAPIUtil.getAllPhotos().then(
      photos => dispatch(receiveAllImages(photos))
  ));
}

export const uploadPhotos = photos => dispatch => {
  return (
    PhotoAPIUtil.postPhoto(photos).then(
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