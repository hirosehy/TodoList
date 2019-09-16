import React, { useContext, useMemo } from 'react'
import { View } from 'react-native'
import Item from '../../components/Molecules/Item'
import InputForm from '../../components/Molecules/InputForm'

import { Store } from '../../store'

export default function List (props) {
  const { state, dispatch } = useContext(Store)
  const todos = useMemo(() => state, [
    state
  ])

  const checked = (index) => {
    todos.list[index].done = !todos.list[index].done
    dispatch({ type: 'set_todos', todos: todos.list })
  }

  const handleFocus = () => {
    dispatch({ type: 'todo_editing' })
  }

  // まだcontentに反映されてない
  const handleBlur = () => {
    dispatch({ type: 'todo_editing' })
  }

  const changeValue = (text, index) => {
    state.list[index].content = text
    dispatch({
      type: 'set_todos',
      todos: state.list
    })
  }

  return (
    <View>
      <InputForm />
      {state.list.map((data, index) => {
        return (<Item
          todo={data}
          checked={checked}
          adding={false}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          changeValue={changeValue}
          index={index}
          key={index}
        />)
      })}
    </View>
  )
}
