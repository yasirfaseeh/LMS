import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Buttons(props) {
  return (
    <TouchableOpacity style={[{...styles.button}, props.fill ? {...styles.white}: null, {...props.style}]} activeOpacity={0.5} onPress={props.onPress}>
        <Text style={[{...styles.text}, props.fill ? {...styles.blackText} : null]}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: 'black',
        margin: 20,
        borderRadius: 5,
        padding: 20,
    },
    text:{
        textAlign: 'center',
        color:'white',
        fontWeight: 'bold'
    }, white:{
      backgroundColor:'white',
    }, blackText:{
      color: 'black'
    }
})