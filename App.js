import React, { Component } from 'react'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'
import createStore from './src/store'
import Top from './src/container/pages'

const { store, persistor } = createStore()

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Top />
        </PersistGate>
      </Provider>
    )
  }
}
