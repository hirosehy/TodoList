import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { setAdding } from '../../../redux/actions'

class Header extends Component {
  state = {
    adding: this.props.adding
  }

  render () {
    const { adding, onAdding } = this.props

    const changeAdding = () => {
      onAdding(!adding)
    }

    const ListOperation = () => {
      return adding
        ? <Text style={styles.headerRight} onPress={changeAdding}>追加</Text>
        : <Text style={styles.headerRight}>削除</Text>
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
    adding: state.todos.adding
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAdding: adding => {
      return dispatch(setAdding(adding))
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
