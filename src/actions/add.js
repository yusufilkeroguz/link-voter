let nextId = 0

export const add = () => ({
  id: nextId++,
  type: 'add',
  payload: 'add'
})
