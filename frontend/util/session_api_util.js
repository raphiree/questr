export const signup = user => {
  return (
    $.ajax({
      method: 'POST',
      url: 'api/users',
      data: { user },
    })
  )
}

export const checkUser = username => (
  $.ajax({
    method: 'POST',
    url: 'api/users/search',
    data: { user: {username: username} }
  })
)

export const login = user => (
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: { user },
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: 'api/session',
  })
);