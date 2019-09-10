import React, { Component } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import Header from './src//container/Organisms/Header'
import List from './src/container/Organisms/TodoList'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'
import createStore from './src/store'

const { store, persistor } = createStore()

export default class App extends Component {
  render () {
    return (
      <Provider store={store} style={styles.container}>
        <PersistGate loading={null} persistor={persistor}>
          <Header />
          <ScrollView>
            <List />
          </ScrollView>
        </PersistGate>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1
  }
})
