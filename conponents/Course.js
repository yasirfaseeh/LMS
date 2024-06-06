import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import HeaderText from './HeaderText'
import OtherText from './OtherText'

export default function Course(props) {
  return (
    <View style={styles.container}>
      <View style={styles.box}></View>
      <View style={{alignItems: 'flex-start'}}>
      <HeaderText text={props.course} style={{fontSize: 12,}}/>
      <OtherText text={props.by} style={{fontSize: 10, color: 'grey'}}/>
      <Image source={require('../images/Bar.png')} style={{width:230}}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#E5EAF4',
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 10,
    borderColor: '#C6C6C6',
    borderWidth: 1,
    height: 79,
  },
  box:{
    backgroundColor: "#C6C6C6",
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowRadius: 5,
    elevation: 10,
  },
})