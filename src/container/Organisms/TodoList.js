import React, { Component } from 'react'
import { View } from 'react-native'
import Item from '../../components/Molecules/Item'
import { connect } from 'react-redux'

class List extends Component {
  render () {
    const { todos } = this.props

    return (
      <View>
        {todos.map((data, index) => {
          return <Item todos={data} key={index} />
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
