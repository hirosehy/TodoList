import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { setEditing } from '../../actions'

class AtomInputText extends Component {
  state = {
    inputValue: this.props.value ? this.props.value : ''
  }

  _handleTextChange = inputValue => {
    this.setState({ inputValue })
  }

  render () {
    const { editing, onEditing } = this.props

    const changeEditing = () => {
      onEditing(!editing)
    }

    return (
      <TextInput
        style={styles.textInput}
        onChangeText={text => this._handleTextChange(text)}
        value={this.state.inputValue}
        onFocus={changeEditing}
        onBlur={changeEditing}
        multiline
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    adding: state.todos.editing
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEditing: editing => {
      return dispatch(setEditing(editing))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AtomInputText)

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 20,
    backgroundColor: '#888888',
    flex: 1,
    alignItems: 'stretch'
  }
})
