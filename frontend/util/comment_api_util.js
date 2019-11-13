export const createComment = formData => {
  const photo_id = formData.get('photo_id')
  return (
    $.ajax({
      method: 'POST',
      url: `api/photos/${photo_id}/comments`,
      data: formData,
      contentType: false,
      processData: false,
    })
  )
}

export const getComments = photo_id => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/photos/${photo_id}/comments`,
    })
  )
}