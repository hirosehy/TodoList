import React, { useContext, useState } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import AtomInputText from '../Atoms/AtomInputText'

import { Store } from '../../store'

export default function InputForm () {
  const { state, dispatch } = useContext(Store)
  const [text, setText] = useState('')

  const handleTextChange = (text) => {
    setText(text)
  }

  const onButton = () => {
    state.list = state.list.concat({
      content: text,
      done: false
    })
    dispatch(
      {
        type: 'set_todos',
        todos: state.list
      }
    )
  }

  return (
    <View style={styles.container}>
      <AtomInputText
        handleTextChange={handleTextChange}
      />
      <Button
        title='追加'
        onPress={() => onButton()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  }
})
