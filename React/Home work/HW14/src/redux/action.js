export function setUserInfo(username, status) {
  const users = {
    username: username,
    status: status,
  }
  return {
    type: 'SET_USER_INFO',
    payload: users,
  }
}
