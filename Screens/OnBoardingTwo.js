import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CirclePic from '../conponents/CirclePic'
import HeaderText from '../conponents/HeaderText'
import OtherText from '../conponents/OtherText'
import Buttons from '../conponents/Buttons'
import SmallButton from '../conponents/SmallButton'
import SliderCircles from '../conponents/SliderCircles'

export default function OnBoardingOne(props) {
  return (
    <View style={styles.container}>
      <SmallButton text='Skip' style={{alignSelf: 'flex-end'}} onPress={()=>{props.navigation.navigate('Join')}}/>
      <CirclePic/>
      <HeaderText text='Begin your learning journey and unlock a world of knowledge' style={{fontSize: 22, marginHorizontal: 20}}/>
      <OtherText text='Explore our comprehensive courses designed to transform your skills and career'/>
      <SliderCircles fillTwo/>
      <Buttons text='Continue' onPress={()=>{props.navigation.navigate('OnBoardingThree')}}/>
    </View>
  )
}

const styles = StyleSheet.create({})