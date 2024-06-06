import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function (props) {
  return (
    <View>
      <Text style={{...styles.text, ...props.style}}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text:{
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    }
})