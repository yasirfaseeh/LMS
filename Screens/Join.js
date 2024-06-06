import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import HeaderText from '../conponents/HeaderText'
import OtherText from '../conponents/OtherText'
import Buttons from '../conponents/Buttons'

export default function Join(props) {
  return (
    <View style={styles.container}>
      <HeaderText text='Join IT Group to Kick Start Your Lesson' style={{fontSize: 25, margin: 20}}/>
      <OtherText text='Join and Learn from our Top Instructors!'/>
      <View style={styles.row} >
        <Buttons text='Sign In' onPress={()=>{props.navigation.navigate('SignIn')}}/>
        <Buttons text='Sign Up' onPress={()=>{props.navigation.navigate('SignUp')}}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 100
    },
    row:{
        flexDirection: 'row',
    }
})