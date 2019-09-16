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

  const onEditing = () => {
    dispatch({ type: 'todo_editing', editing: true })
  }

  return (
    <View style={styles.header}>
      <Text style={styles.headerLeft} onPress={() => onEditing()}>編集</Text>
      <Text style={styles.headerTitle}>リスト</Text>
      <Text style={styles.headerRight} onPress={deleteTodos}>削除</Text>
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
