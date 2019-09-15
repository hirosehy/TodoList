import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import Header from '../Organisms/Header'
import TodoList from '../Organisms/TodoList'

import { Provider } from '../../store'

export default function Top () {
  return (
    <Provider>
      <Header />
      <ScrollView>
        <TodoList />
      </ScrollView>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1
  }
})
