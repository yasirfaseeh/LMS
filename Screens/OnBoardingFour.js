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
      <HeaderText text='Join a community of learners and embark on a learning' style={{fontSize: 22, marginHorizontal: 20}}/>
      <OtherText text='Connect with like-minded individuals Join us to learn, grow, and thrive together!'/>
      <SliderCircles fillFour/>
      <Buttons text='Continue' onPress={()=>{props.navigation.navigate('Join')}}/>
    </View>
  )
}

const styles = StyleSheet.create({})