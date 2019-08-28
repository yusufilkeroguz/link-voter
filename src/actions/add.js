const DEFAULT_VOTE = 0

export const add = ({ name, link }) => ({
  type: 'add',
  payload: {
    name,
    link,
    vote: DEFAULT_VOTE
  }
})
