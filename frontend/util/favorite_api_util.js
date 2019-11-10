export const favoritePhoto = formData => {
  const user_id = formData.get('user_id');
  return (
    $.ajax({
      method: 'POST',
      url: `api/users/${user_id}/favorites`,
      data: formData,
    })
  )
}