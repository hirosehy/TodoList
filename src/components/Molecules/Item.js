import React, { useState, useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import AtomInputText from '../Atoms/AtomInputText'
import Icon from 'react-native-vector-icons/FontAwesome'
import { CheckBox } from 'react-native-elements'
import { Store } from '../../store'

export default function Item (props) {
  const [editing, setEditing] = useState(false)
  const content = props.todo ? props.todo.content : ''
  const [value, setValue] = useState(content)

  const onAdding = () => {
    console.log('dispatch')
  }

  const onCheckbox = () => {
    props.checked(props.index)
  }

  const TodoIcon = () => {
    return props.adding && !editing
      ? <Icon name='plus' style={styles.icon} onPress={() => onAdding()} />
      : <CheckBox onPress={() => onCheckbox()} checked={props.todo.done} />
  }

  return (
    <View style={styles.container}>
      <TodoIcon />
      <AtomInputText
        value={value}
        handleFocus={() => props.handleFocus()}
        handleTextChange={(text) => setValue(text)}
        handleBlur={() => props.handleBlur()}
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
