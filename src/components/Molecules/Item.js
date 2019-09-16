import React, { useState, createRef, useContext } from 'react'
import { View, StyleSheet, CheckBox } from 'react-native'
import AtomInputText from '../Atoms/AtomInputText'
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

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
        <MaterialCommunityIcons style={styles.minus} name='minus' size={30} onPress={() => selectDelete()} />
      )
    }
    return (
      done
        ? <MaterialCommunityIcons
          style={styles.checkbox}
          name='checkbox-marked-outline'
          size={30}
          onPress={() => onCheckbox()}
        />
        : <MaterialCommunityIcons
          style={styles.checkbox}
          name='checkbox-blank-outline'
          size={30}
          onPress={() => onCheckbox()}
        />
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
    marginTop: 10,
    marginRight: 20,
    marginBottom: 10
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  checkbox: {
    color: '#4873ff',
    marginRight: 16,
    marginLeft: 10
  },
  minus: {
    marginLeft: 10,
    color: '#ff0000',
    marginRight: 16
  }
})
