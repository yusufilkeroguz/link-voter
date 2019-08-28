import { add } from '../actions/add'
import { remove } from '../actions/remove'
import { up_vote } from '../actions/up_vote'
import { down_vote } from '../actions/down_vote'
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

  it('Up Vote Action', () => {
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
        vote: 1
      }
    }

    jest.spyOn(window.localStorage.__proto__, 'setItem');
    window.localStorage.__proto__.setItem = jest.fn();

// assertions as usual:
    expect(localStorage.setItem).toHaveBeenCalled();


    expect(up_vote(0)).toEqual(expectedAction)
  })
})
