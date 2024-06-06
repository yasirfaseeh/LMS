import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SliderCircles(props) {
  return (
    <View style={styles.circles}>
        <View style={[{...styles.circle}, props.fillOne ? {...styles.fill} : null]} ></View>
        <View style={[{...styles.circle}, props.fillTwo ? {...styles.fill} : null]} ></View>
        <View style={[{...styles.circle}, props.fillThree ? {...styles.fill} : null]} ></View>
        <View style={[{...styles.circle}, props.fillFour ? {...styles.fill} : null]} ></View>
    </View>
  )
}

const styles = StyleSheet.create({
    circles:{
        flexDirection: 'row',
        alignSelf:'center'
      },
      circle:{
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor:'#C6C6C6',
        marginHorizontal: 3,
        marginTop: 10,
      },
      fill:{
        backgroundColor:'black',
      }
})