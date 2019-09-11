import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import AtomInputText from '../Atoms/AtomInputText'
import Icon from 'react-native-vector-icons/FontAwesome'
import { CheckBox } from 'react-native-elements'

export default class Item extends Component {
  constructor (props) {
    super(props)
    this.state = {
      done: this.props.todo ? this.props.todo.done : undefined,
      content: this.props.todo ? this.props.todo.content : '',
      editing: false
    }
  }

  checkboxPress = () => {
    this.setState(() => ({ done: !this.state.done }))
  }

  handleEditing = () => {
    this.setState(() => ({ editing: !this.state.editing }))
  }

  render () {
    const changeAdding = () => {
      console.log('emitする')
    }

    const TodoIcon = (adding) => {
      return adding && !this.state.editing
        ? <Icon name='plus' style={styles.icon} onPress={changeAdding} />
        : <CheckBox onPress={this.checkboxPress} checked={this.state.done} />
    }

    return (
      <View style={styles.container}>
        {TodoIcon(this.props.adding)}
        <AtomInputText value={this.state.content} handleEditing={this.handleEditing} />
      </View>
    )
  }
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
