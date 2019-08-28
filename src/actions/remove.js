export const remove = id => ({
  id,
  type: 'remove',
  payload: ({ state, action }) => {
    state.splice(id, 1) // delete from id, length 1

    return state
  }
})
