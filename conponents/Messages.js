import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import HeaderText from './HeaderText'
import OtherText from './OtherText'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function Messages(props) {
  return (
    <View style={styles.wraper}>
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems:'center'}}>
      <View style={styles.circle}></View>
      <View style={{alignItems: 'flex-start'}}>
        <Text style={{fontSize: 12, fontWeight: 'bold'}}>{props.name}</Text>
        <Text style={{fontSize: 10}}>{props.message}</Text>
      </View>
      </View>
      <View style={{alignItems:'center'}}>
      <View style={styles.smallCircle}>
        <Text style={{color: 'white', fontSize: 10, padding: 3}}>{props.noOfMessages}</Text>
      </View>
        <Text style={{fontSize: 10}} >{props.time}</Text>
      </View>
    </View>
      <View style={{height: 1, backgroundColor: "black"}}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wraper:{
    marginHorizontal: 20,
  },
  container:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    // marginHorizontal: 20,
    // marginVertical: 5,
    height: 79,
  },
  circle:{
    backgroundColor: "#C6C6C6",
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    elevation: 10,
  },
  smallCircle:{
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'black',
  }
})