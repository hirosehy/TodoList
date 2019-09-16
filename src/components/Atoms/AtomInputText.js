import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default class AtomInputText extends Component {
  constructor (props) {
    super(props)
    this.ref = React.createRef()
  }

  state = {
    inputValue: this.props.value ? this.props.value : ''
  }

  focus = () => {
    this.ref.current.focus()
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
        ref={this.ref}
      />
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'gray',
    borderBottomWidth: 1,
    fontSize: 20,
    flex: 1,
    alignItems: 'stretch'
  }
})
