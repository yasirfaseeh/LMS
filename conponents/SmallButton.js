import { StyleSheet, Text, View, Pressable} from 'react-native'
import React from 'react'

export default function SmallButton(props) {
  return (
    <Pressable style={[{...styles.container},{...props.style}]} onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
    },
    text:{
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        color: 'grey',
        margin: 10

    }
})