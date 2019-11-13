import * as CommAPIUtil from '../util/comment_api_util';

export const RECEIVE_PHOTO_COMMENTS = 'RECEIVE_PHOTO_COMMENTS';

const getPhotoComments = comments => {
  return ({
    type: RECEIVE_PHOTO_COMMENTS,
    comments
  })
}

export const createComment = formData => dispatch => {
  return (
    CommAPIUtil.createComment(formData).then(
      (comments) => dispatch(getPhotoComments(comments))
    ));
};

export const getComments = photoId => dispatch => {
  return (
    CommAPIUtil.getComments(photoId).then(
      (comments) => dispatch(getPhotoComments(comments))
    ));
};