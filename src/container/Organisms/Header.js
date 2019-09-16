import React, { useContext, useMemo } from 'react'
import { StyleSheet, Text, View } from 'react-native'

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
    return <Text onPress={deleteTodos} style={styles.headerRight}>削除</Text>
  }

  return (
    <View style={styles.header}>
      <ListOperationLeft />
      <Text style={styles.headerTitle}>リスト</Text>
      <ListOperationRight />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 70,
    paddingTop: 34
  },
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
