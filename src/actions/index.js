import { TODO_ADDING, TODO_EDITING, ADD_TODO } from './types'

export const setAdding = adding => {
  return {
    type: TODO_ADDING,
    adding: adding
  }
}

export const setEditing = editing => {
  return {
    type: TODO_EDITING,
    editing: editing
  }
}

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    todos: todo
  }
}
