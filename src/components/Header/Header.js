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
    paddingTop: 34
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})
