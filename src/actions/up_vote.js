export const up_vote = id => ({
  id,
  type: 'up_vote',
  payload: ({ state, action }) => {
    state[id]['vote'] = state[id]['vote'] + 1

    return state
  }
})
