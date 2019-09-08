import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Header from './src/components/Organisms/Header'
import List from './src/components/Organisms/TodoList'
import { Provider } from 'react-redux'
import { store } from './redux/store'

export default function App () {
  return (
    <Provider store={store} style={styles.container}>
      <Header />
      <ScrollView>
        <List />
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
