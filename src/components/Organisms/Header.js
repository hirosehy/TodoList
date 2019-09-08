import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { setAdding } from '../../../redux/actions'

class Header extends Component {
  state = {
    adding: this.props.adding
  }

  componentDidMount () {
  }

  render () {
    const { adding, onAdding } = this.props

    const ListOperation = () => {
      // onAdding(true)
      return adding ? <Text>追加</Text> : <Text>削除</Text>
    }

    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>リスト{this.props.adding ? 'aaa' : 'bbb'}</Text>
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
    height: 70,
    paddingTop: 34
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})
