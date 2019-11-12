export const postPhoto = formData => {
  const id = parseInt(formData.get('user_id'));
  return (
    $.ajax({
      method: 'POST',
      url: `api/users/${id}/photos`,
      data: formData,
      contentType: false,
      processData: false,
    })
  )
}

export const getUserPhotos = id => {
  const user_id = parseInt(id);
  return (
    $.ajax({
      method: 'GET',
      url: `api/users/${user_id}/photos`,
    })
  )
}

export const getAllPhotos = () => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/photos`,
    })
  )
}

export const loadMorePhotos = (displayed) => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/photos`,
      data: {offset: displayed},
    })
  )
}

export const getUser = id => {
  const user_id = parseInt(id);
  return (
    $.ajax({
      method: 'GET',
      url: `api/users/${user_id}`
    })
  )
}

export const getAllUsers = () => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/users`,
    })
  )
}

export const getAPhoto = (user_id, photo_id) => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/users/${user_id}/photos/${photo_id}`
    })
  )
}