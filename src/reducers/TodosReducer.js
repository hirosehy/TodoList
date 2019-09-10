import {
  TODO_ADDING,
  TODO_EDITING,
  ADD_TODO
} from '../actions/types'

const initialState = {
  adding: false,
  editing: false,
  list: [{ 'content': 'test', done: true }, { 'content': 'test2', done: false }]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADDING:
      return { ...state, ...initialState, adding: action.adding }
    case TODO_EDITING:
      return { ...state, ...initialState, editing: action.editing }
    case ADD_TODO:
      // ここにステートの変更とかの処理をかくぽいい
      return { ...state, ...initialState, todos: action.todos }
    default:
      return state
  }
}
