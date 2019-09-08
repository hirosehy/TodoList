import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import AtomInputText from '../Atoms/AtomInputText'
import Icon from 'react-native-vector-icons/FontAwesome'
import { setAdding } from '../../../redux/actions'
import { connect } from 'react-redux'
import { CheckBox } from 'react-native-elements'

class Item extends Component {
  constructor (props) {
    super(props)
    this.state = { adding: false, todoChecked: false }
  }

  checkboxPress = () => {
    this.setState(() => ({ todoChecked: !this.state.todoChecked }))
  }

  render () {
    const { adding, onAdding } = this.props

    const changeAdding = () => {
      onAdding(!adding)
    }

    const TodoIcon = () => {
      return adding
        ? <CheckBox onPress={this.checkboxPress} checked={this.state.todoChecked} />
        : <Icon name={adding ? 'eye' : 'plus'} style={styles.icon} onPress={changeAdding} />
    }

    return (
      <View style={styles.container}>
        <TodoIcon />
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
