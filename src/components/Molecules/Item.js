import React, { Component } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import AtomInputText from '../Atoms/AtomInputText'
import Icon from 'react-native-vector-icons/FontAwesome'
import { setAdding } from '../../../redux/actions'
import { connect } from 'react-redux'

class Item extends Component {
  constructor (props) {
    super(props)
    this.state = { adding: false }
  }

  state = {
    adding: this.props.adding
  }

  render () {
    const { adding, onAdding } = this.props

    const changeAdding = () => {
      onAdding(!adding)
    }

    return (
      <View style={styles.container}>
        <Icon name={adding ? 'eye' : 'plus'} style={styles.icon} onPress={changeAdding} />
        <AtomInputText />
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

export default connect(mapStateToProps, mapDispatchToProps)(Item)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 10,
    marginRight: 20,
    marginBottom: 10,
    marginLeft: 20
  },
  icon: {
    color: '#4873ff',
    fontSize: 26,
    marginRight: 16,
    width: 28
  },
  taskText: {
    fontSize: 24
  }
})
