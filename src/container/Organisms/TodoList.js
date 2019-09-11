import React, { Component } from 'react'
import { View } from 'react-native'
import Item from '../../components/Molecules/Item'
import { connect } from 'react-redux'
import { setAdding, setTodos } from '../../actions/index'

class List extends Component {
  render () {
    const { todos, adding, onAdding, onSetTodos } = this.props
    const checked = (index) => {
      todos.list[index].done = !todos.list[index].done
      onSetTodos(todos.list)
    }

    const changeAdding = () => {
      onAdding(adding)
    }

    const handleTextChange = (text, adding) => {
      this.props.addTodo(text, adding)
    }

    return (
      <View>
        {todos.list.map((data, index) => {
          return <Item todo={data} adding={false} index={index} key={index} checked={checked} />
        })}
        <Item adding key='adding' changeAdding={changeAdding} handleTextChange={handleTextChange} />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    adding: state.todos.adding
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAdding: adding => {
      return dispatch(setAdding(!adding))
    },
    onSetTodos: todos => {
      // return dispatch(setTodos(todos))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
