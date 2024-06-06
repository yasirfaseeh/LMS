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
      <HeaderText text='Welcome to IT Group where learning meets innovation!' style={{fontSize: 22, marginHorizontal: 20}}/>
      <OtherText text='Empowering your journey through cutting-edge IT education and expertise'/>
      <SliderCircles fillOne/>
      <Buttons text='Continue' onPress={()=>{props.navigation.navigate('OnBoardingTwo')}}/>
    </View>
  )
}

const styles = StyleSheet.create({})