const initialState = {
  users: [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ],
  filter: '',
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_FILTER':
      return { ...state, filter: action.payload }
    default:
      return state
  }
}
