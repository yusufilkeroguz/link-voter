import { add } from '../actions/add'
import { up_vote } from '../actions/up_vote'
import * as types from '../constants/types'

describe('Actions', () => {
  it('Add Action', () => {
    const sampleData = {
      name: 'FacebookTest',
      link: 'http://www.facebook.com',
      vote: 0
    }
    const expectedAction = {
      type: types.ADD_LINK,
      payload: {
        name: sampleData.name,
        link: sampleData.link,
        vote: 0
      }
    }

    expect(add({ name: sampleData.name, link: sampleData.link })).toEqual(expectedAction)
  })
})
