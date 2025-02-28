const initialState = {
  username: 'John Doe',
  status: 'offline',
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER_INFO':
      return {
        ...state,
        username: action.payload.username,
        status: action.payload.status,
      }
    default:
      return state
  }
}
