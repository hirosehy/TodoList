import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Header from '../Organisms/Header'
import List from '../Organisms/TodoList'

export default class Top extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView>
          <List />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1
  }
})
