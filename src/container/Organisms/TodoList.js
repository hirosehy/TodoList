import React, { Component } from 'react'
import { View } from 'react-native'
import Item from '../../components/Molecules/Item'
import { connect } from 'react-redux'
import { setTodos } from '../../actions/index'

class List extends Component {
  render () {
    const { todos, onSetTodos } = this.props
    const checked = (index) => {
      todos.list[index].done = !todos.list[index].done
      onSetTodos(todos.list)
    }

    return (
      <View>
        {this.props.todos.list.map((data, index) => {
          return <Item todo={data} adding={false} index={index} key={index} checked={checked} />
        })}
        <Item adding key='adding' />
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
      console.log(todos)
      // return dispatch(setTodos(todos))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
