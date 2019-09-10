import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Item from '../../components/Molecules/Item'
import { connect } from 'react-redux'

class List extends Component {
  render () {
    return (
      <View>
        {this.props.todos.todos.map((data, index) => {
          return <Item todos={data} adding={false} key={index} />
        })}
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(List)
