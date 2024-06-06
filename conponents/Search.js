import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'

export default function Search() {
  return (
    <View>
      <TextInput style={styles.input} placeholder='Search Here' />
      <Image style={styles.image} source={require('../images/Search.png')}/>
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        textAlign: 'center',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 20,
        marginHorizontal: 20,
        marginVertical: 5,
        height: 46,
        paddingLeft: 10,
        marginTop: 5,
        position: 'relative'
    },
    image:{
      position: 'absolute',
      top: 15,
      left: 30,
    }
})