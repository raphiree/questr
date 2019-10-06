export const RECEIVE_UPLOADED_IMAGES = "RECEIVE_UPLOADED_IMAGES";

const receiveUploadedImages = uploads => {
  return ({
    type: RECEIVE_UPLOADED_IMAGES,
    uploads
  })
}

export const uploadImages = uploads => dispatch => {
  dispatch(receiveUploadedImages(uploads))
};