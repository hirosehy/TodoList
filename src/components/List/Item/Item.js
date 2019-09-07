import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Item extends Component {
  constructor (props) {
    super(props)
    this.state = { adding: false }
  }

  render () {
    return (
      <View style={styles.container}>
        <Icon name='plus' style={styles.icon} />
        <Text style={styles.taskText}>{this.state.adding ? 'aaa' : 'bbb'}</Text>
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
    fontSize: 28,
    marginRight: 16
  },
  taskText: {
    fontSize: 24
  }
})
