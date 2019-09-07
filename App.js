import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Header from './src/components/Header/Header'
import List from './src/components/List/List'

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
