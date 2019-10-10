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

export const getUser = id => {
  const user_id = parseInt(id);
  return (
    $.ajax({
      method: 'GET',
      url: `api/users/${user_id}`
    })
  )
}