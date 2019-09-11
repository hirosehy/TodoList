import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Header from '../Organisms/Header'
import List from '../Organisms/TodoList'
import { setAdding, setTodos } from '../../actions/index'

import { connect } from 'react-redux'

class Top extends Component {
  state = { addText: '' }

  render () {
    const { todos, onSetTodos } = this.props

    const submitAdding = () => {
      onSetTodos(
        todos.list.concat(
          {
            content: this.state.addText,
            done: false
          }
        )
      )
      console.log(
        todos.list.concat(
          {
            content: this.state.addText,
            done: false
          }
        )
      )
    }

    const addTodo = (text, adding) => {
      if (adding) {
        this.setState({ addText: text })
      }
    }

    return (
      <View style={styles.container}>
        <Header submitAdding={submitAdding} />
        <ScrollView>
          <List addTodo={addTodo} />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSetTodos: todos => {
      return dispatch(setTodos(todos))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Top)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1
  }
})
