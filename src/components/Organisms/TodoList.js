import React, { Component } from 'react'
import { View } from 'react-native'
import Item from '../Molecules/Item'
import { connect } from 'react-redux'

class List extends Component {
  render () {
    const { todos } = this.props

    return (
      <View>
        {todos.map((data) => {
          return <Item value={data.content} />
        })}
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos.todos
  }
}

export default connect(mapStateToProps)(List)
