import React, { useContext, useMemo } from 'react'
import { View } from 'react-native'
import Item from '../../components/Molecules/Item'

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
    if (state.adding) {
      dispatch({ type: 'todo_adding', adding: false })
    }
    dispatch({ type: 'todo_editing' })
  }

  const onAdding = () => {
    dispatch({ type: 'todo_adding', adding: true })
  }

  const changeValue = (text, index) => {
    dispatch({
      type: 'input_value',
      inputValue: {
        content: text,
        index: index
      }
    })
  }

  return (
    <View>
      {state.list.map((data, index) => (
        <Item
          todo={data}
          checked={checked}
          adding={false}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          changeValue={changeValue}
          index={index}
          key={index}
        />
      ))}
    </View>
  )
}
