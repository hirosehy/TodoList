import {
  TODO_EDITING,
  ADD_TODO,
  SET_TODOS,
  INPUT_VALUE
} from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case TODO_EDITING:
      return { ...state, editing: action.editing }
    case ADD_TODO:
      return { ...state, todos: action.todos }
    case SET_TODOS:
      return { ...state, list: action.todos }
    case INPUT_VALUE:
      return {
        ...state,
        inputValue: {
          content: action.inputValue.content,
          index: action.inputValue.index
        }
      }
    default:
      return state
  }
}
