import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { setAdding, setEditing, setTodos } from '../../actions/index'

class Header extends Component {
  render () {
    const { adding, editing, todos, onAdding, onEditing, onSetTodos } = this.props

    const changeAdding = () => {
      this.props.submitAdding(!adding)
      onAdding(!adding)
    }

    const changeEditing = () => {
      onEditing(!editing)
    }

    const deleteTodos = () => {
      onSetTodos(todos.filter(todo => !todo.done))
    }

    const ListOperation = () => {
      if (adding && !editing) {
        return <Text style={styles.headerRight} onPress={changeAdding}>追加</Text>
      }
      return <Text style={styles.headerRight} onPress={deleteTodos}>削除</Text>
    }

    return (
      <View style={styles.header}>
        <Text style={styles.headerLeft}>編集</Text>
        <Text style={styles.headerTitle}>リスト</Text>
        {ListOperation()}
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    adding: state.todos.adding,
    editing: state.todos.editing,
    todos: state.todos.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAdding: adding => {
      return dispatch(setAdding(adding))
    },
    onEditing: editing => {
      return dispatch(setEditing(editing))
    },
    onSetTodos: todos => {
      return dispatch(setTodos(todos))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 70,
    paddingTop: 34
  },
  headerLeft: {
    marginLeft: 20,
    fontSize: 18,
    color: '#4873ff'
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  headerRight: {
    marginRight: 20,
    fontSize: 18,
    color: '#4873ff'
  }
})
