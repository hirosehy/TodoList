import React, { createRef, useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import AtomInputText from '../Atoms/AtomInputText'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { Store } from '../../store'

export default function Item (props) {
  let value = props.todo.content
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
    value = text
    props.changeValue(text, props.index)
  }

  return (
    <View style={styles.container}>
      <TodoIcon />
      <AtomInputText
        value={value}
        handleFocus={() => props.handleFocus ? props.handleFocus() : null}
        handleTextChange={(text) => changeValue(text)}
        handleBlur={() => props.handleFocus ? props.handleBlur() : null}
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
