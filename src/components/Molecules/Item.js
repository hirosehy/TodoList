import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import AtomInputText from '../Atoms/AtomInputText'
import Icon from 'react-native-vector-icons/FontAwesome'
import { CheckBox } from 'react-native-elements'

export default class Item extends Component {
  constructor (props) {
    super(props)
    this.state = {
      done: this.props.todos ? this.props.todos.done : undefined,
      content: this.props.content ? this.props.todos.content : ''
    }
  }

  checkboxPress = () => {
    this.setState(() => ({ done: !this.state.done }))
  }

  render () {
    const changeAdding = () => {
      console.log('emitする')
    }

    const TodoIcon = (adding) => {
      return adding
        ? <Icon name='plus' style={styles.icon} onPress={changeAdding} />
        : <CheckBox onPress={this.checkboxPress} checked={this.state.done} />
    }

    return (
      <View style={styles.container}>
        {TodoIcon(this.props.adding)}
        <AtomInputText value={this.state.content} />
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
