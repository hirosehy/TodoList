import { TODO_ADDING, TODO_EDITING, ADD_TODO, SET_TODOS } from './types'

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

export const setTodos = todos => {
  return {
    type: SET_TODOS,
    todos: todos
  }
}
