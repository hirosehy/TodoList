import React, { useContext, useMemo } from 'react'
import { StyleSheet, Text } from 'react-native'
import { Header as HeaderElement } from 'react-native-elements'

import { Store } from '../../store'

export default function Header (props) {
  const {
    state,
    dispatch
  } = useContext(Store)

  const todos = useMemo(() => state, [
    state
  ])

  const deleteTodos = () => {
    todos.list = todos.list.filter(todo => !todo.done)
    dispatch({ type: 'set_todos', todos: todos.list })
  }

  const openEditing = () => {
    dispatch({ type: 'todo_editing', editing: true })
  }

  const closeEditing = () => {
    dispatch({ type: 'todo_editing', editing: false })
  }

  const ListOperationLeft = () => {
    if (state.editing) {
      return <Text style={styles.headerLeft} onPress={() => closeEditing()}>完了</Text>
    }
    return <Text style={styles.headerLeft} onPress={() => openEditing()}>編集</Text>
  }

  const ListOperationRight = () => {
    if (state.editing) return null
    return <Text onPress={deleteTodos} style={styles.headerRight}>削除</Text>
  }

  return (
    <HeaderElement
      leftComponent={<ListOperationLeft />}
      centerComponent={<Text style={styles.headerTitle}>リスト</Text>}
      rightComponent={<ListOperationRight />}
      backgroundColor='#f8f8f8'
    />
  )
}

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 20,
    fontSize: 18,
    color: '#4873ff'
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  headerRight: {
    marginRight: 20,
    fontSize: 18,
    color: '#4873ff'
  }
})
