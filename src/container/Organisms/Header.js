import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { setAdding, setEditing } from '../../actions/index'

class Header extends Component {
  state = {
    adding: this.props.adding,
    editing: this.props.editing
  }

  render () {
    const { adding, editing, onAdding, onEditing } = this.props

    const changeAdding = () => {
      onAdding(!adding)
    }

    const changeEditing = () => {
      onEditing(!editing)
    }

    const ListOperation = () => {
      if (adding && !editing) {
        return <Text style={styles.headerRight} onPress={changeAdding}>追加</Text>
      } else if (!adding && editing) {
        return <Text style={styles.headerRight} onPress={changeEditing}>完了</Text>
      }
      return <Text style={styles.headerRight}>削除</Text>
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
    editing: state.todos.editing
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAdding: adding => {
      return dispatch(setAdding(adding))
    },
    onEditing: editing => {
      return dispatch(setEditing(editing))
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
