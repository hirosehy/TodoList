import React, { useReducer, createContext } from 'react'
import rootReducer from '../reducers/TodosReducer'

const initialState = {
  adding: false,
  editing: false,
  inputValue: '',
  list: [{ 'content': 'test', done: true }, { 'content': 'test2', done: false }, { 'content': 'test3', done: false }]
}

export const Store = createContext()

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState)
  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}
