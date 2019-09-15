import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import Header from '../Organisms/Header'
import TodoList from '../Organisms/TodoList'

import { Provider } from '../../store'

export default function Top () {
  const [value, setValue] = useState('')

  const inputValue = (text) => {
    setValue(text)
  }

  return (
    <Provider>
      <Header />
      <ScrollView>
        <TodoList changeValue={inputValue} />
      </ScrollView>
    </Provider>
  )
}
