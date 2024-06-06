import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderText from '../conponents/HeaderText'
import CirclePic from '../conponents/CirclePic'
import Buttons from '../conponents/Buttons'

export default function UpdatedPass(props) {
  return (
    <View>
      <CirclePic/>
      <HeaderText text='Your Password has been updated Successfully!'/>
      <Buttons text='Done' onPress={()=>{props.navigation.navigate('SignIn')}}/>

    </View>
  )
}

const styles = StyleSheet.create({})