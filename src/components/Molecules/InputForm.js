import React, { useContext, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import AtomInputText from '../Atoms/AtomInputText'
import Icon from 'react-native-vector-icons/FontAwesome'

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
        style={styles.input}
        handleTextChange={handleTextChange}
      />
      <Icon name='plus' style={styles.plus} onPress={onButton} size={20} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10
  },
  input: {
    paddingLeft: 10
  },
  plus: {
    marginRight: 20,
    marginLeft: 10,
    color: '#4873ff'
  }
})
