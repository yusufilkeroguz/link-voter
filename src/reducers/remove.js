export default (state = {}, action) => {
  switch (action.type) {
    case 'remove':
      return {
        result: action.payload
      }
    default:
      return state
  }
}
