import React, { useState, createRef } from 'react'
import { View, StyleSheet } from 'react-native'
import AtomInputText from '../Atoms/AtomInputText'
import Icon from 'react-native-vector-icons/FontAwesome'
import { CheckBox } from 'react-native-elements'

export default function Item (props) {
  const content = props.todo ? props.todo.content : ''
  const [value, setValue] = useState(content)
  const [editing, setEditing] = useState(false)
  const done = props.todo ? props.todo.done : false
  const addRef = createRef()

  const onCheckbox = () => {
    props.checked(props.index)
  }

  const onAdding = () => {
    setEditing(true)
    addRef.current.focus()
    props.onAdding()
  }

  const TodoIcon = () => {
    return props.adding && !editing
      ? <Icon name='plus' style={styles.icon} onPress={() => onAdding()} />
      : <CheckBox onPress={() => onCheckbox()} checked={done} />
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
    marginBottom: 10,
    marginLeft: 20
  },
  icon: {
    color: '#4873ff',
    fontSize: 26,
    marginRight: 16,
    width: 28
  },
  taskText: {
    fontSize: 24
  }
})
