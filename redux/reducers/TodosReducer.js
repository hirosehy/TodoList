import {
  TODO_ADDING
} from '../actions/types'

const initialState = { adding: false }

export default (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADDING:
      return { ...state, ...initialState, adding: action.adding }
    default:
      return state
  }
}
