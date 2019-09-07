import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AtomInputText from '../Atoms/AtomInputText'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Item extends Component {
  constructor (props) {
    super(props)
    this.state = { adding: false }
  }

  render () {
    return (
      <View style={styles.container}>
        <Icon name={this.state.adding ? 'plus' : 'eye'} style={styles.icon} />
        <AtomInputText />
      </View>
    )
  }
}

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
