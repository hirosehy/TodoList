import { TODO_ADDING } from './types'

export const setAdding = adding => {
  return {
    type: TODO_ADDING,
    adding: adding
  }
}
