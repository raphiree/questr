export const favoritePhoto = formData => {
  const user_id = formData.get('user_id');
  return (
    $.ajax({
      method: 'POST',
      url: `api/users/${user_id}/favorites`,
      data: formData,
      contentType: false,
      processData: false,
    })
  )
}

export const unfavoritePhoto = formData => {
  const user_id = formData.get('user_id');
  const id = formData.get('favorite_id')
  return (
    $.ajax({
      method: 'DELETE',
      url: `api/users/${user_id}/favorites/${id}`,
    })
  )
}

export const getAllFavorites = user_id => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/users/${user_id}/favorites`,
    })
  )
}