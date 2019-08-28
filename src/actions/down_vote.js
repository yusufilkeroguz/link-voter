export const down_vote = id => ({
  id,
  type: 'down_vote',
  payload: ({ state, action }) => {
    if (state[id]['vote'] > 0) {
      state[id]['vote'] = state[id]['vote'] - 1
    }

    return state
  }
})
