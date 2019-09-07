import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Header extends Component {
  render () {
    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>リスト</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    height: 70,
    paddingTop: 34,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})
