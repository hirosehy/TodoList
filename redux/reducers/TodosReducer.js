import {
  TODO_ADDING,
  TODO_EDITING
} from '../actions/types'

const initialState = {
  adding: false,
  editing: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADDING:
      return { ...state, ...initialState, adding: action.adding }
    case TODO_EDITING:
      return { ...state, ...initialState, editing: action.editing }
    default:
      return state
  }
}
