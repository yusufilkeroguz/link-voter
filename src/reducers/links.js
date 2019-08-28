const addFunction = ({ state, payload }) => {
  return [
    ...state,
    payload
  ]
}

const sendToPayload = ({ state, action }) => {
  if (typeof action.payload === 'function') {
    return action.payload({ state, action })
  }

  return action.payload
}

export default (state = [], action) => {
  switch (action.type) {
    case 'add':
      return addFunction({ state, payload: action.payload })
    case 'remove':
      return sendToPayload({ state, action })
    case 'up_vote':
      return sendToPayload({ state, action })
    case 'down_vote':
      return sendToPayload({ state, action })
    default:
      return state
  }
}
