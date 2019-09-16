import React, { useContext, useMemo } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import AtomInputText from '../Atoms/AtomInputText'

export default function InputForm () {
  const handleTextChange = (text) => {
    console.log(text)
  }

  const onButton = () => {
    console.log('pressed')
  }

  return (
    <View style={styles.container}>
      <AtomInputText
        handleTextChange={handleTextChange}
      />
      <Button
        title='追加'
        onPress={() => onButton()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  }
})
