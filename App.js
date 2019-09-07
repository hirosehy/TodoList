import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Header from './src/components/Organisms/Header'
import List from './src/components/Organisms/TodoList'

export default function App () {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <List />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1
  }
})
