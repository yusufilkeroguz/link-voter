export default (state = {}, action) => {
  switch (action.type) {
    case 'add':
      return {
        result: action.payload
      }
    default:
      return state
  }
}
