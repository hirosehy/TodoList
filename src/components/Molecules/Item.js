import React, { useState, createRef, useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import AtomInputText from '../Atoms/AtomInputText'
import Icon from 'react-native-vector-icons/FontAwesome'
import { CheckBox } from 'react-native-elements'

import { Store } from '../../store'

export default function Item (props) {
  const content = props.todo ? props.todo.content : ''
  const [value, setValue] = useState(content)
  const done = props.todo ? props.todo.done : false
  const addRef = createRef()

  const {
    state,
    dispatch
  } = useContext(Store)

  const onCheckbox = () => {
    props.checked(props.index)
  }

  const selectDelete = () => {
    state.list.splice(props.index, 1)
    dispatch({ type: 'set_todos', todos: state.list })
  }

  const TodoIcon = () => {
    if (state.editing) {
      return (
        <View style={styles.iconContainer}>
          <Icon name='minus' size={20} onPress={() => selectDelete()} />
          <CheckBox onPress={() => onCheckbox()} checked={done} />
        </View>
      )
    }
    return (
      <CheckBox onPress={() => onCheckbox()} checked={done} />
    )
  }

  const changeValue = (text) => {
    setValue(text)
    props.changeValue(text, props.index)
  }

  return (
    <View style={styles.container}>
      <TodoIcon />
      <AtomInputText
        value={value}
        handleFocus={() => props.handleFocus()}
        handleTextChange={(text) => changeValue(text)}
        handleBlur={() => props.handleBlur()}
        ref={addRef}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 10,
    marginRight: 20,
    marginBottom: 10
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  icon: {
    color: '#4873ff',
    fontSize: 20,
    marginRight: 16,
    width: 26
  }
})
