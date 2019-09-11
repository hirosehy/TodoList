import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default class AtomInputText extends Component {
  state = {
    inputValue: this.props.value ? this.props.value : ''
  }

  _handleTextChange = inputValue => {
    this.props.handleTextChange(inputValue)
    this.setState({ inputValue })
  }

  render () {
    return (
      <TextInput
        style={styles.textInput}
        onChangeText={text => this._handleTextChange(text)}
        value={this.state.inputValue}
        onFocus={this.props.handleFocus}
        onBlur={this.props.handleBlur}
        multiline
      />
    )
  }
}

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
