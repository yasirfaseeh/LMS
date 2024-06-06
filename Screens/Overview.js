import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Buttons from '../conponents/Buttons'
import MoreButtons from '../conponents/MoreButtons'
import HeaderText from '../conponents/HeaderText'

export default function Overview() {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <View style={styles.row}>
          <View style={styles.row}>
            <Image source={require('../images/Book.png')}/>
            <Text>80+ Lectures</Text>
          </View>
          <View style={styles.row}>
            <Image source={require('../images/Certificate.png')}/>
            <Text>Certificate</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.row}>
            <Image source={require('../images/Clock.png')}/>
            <Text>80+ Lectures</Text>
          </View>
          <View style={styles.row}>
            <Image source={require('../images/Tag.png')}/>
            <Text>80+ Lectures</Text>
          </View>
        </View>
      </View>
      <HeaderText text='Skills' style={{fontSize: 20, textAlign: 'left'}}/>
      <MoreButtons buttonsArray={["Adobe", "Adobe Photo Shop", "Logo"]} />
      <MoreButtons buttonsArray={["Designing", "Poster Design", "Figma"]} />
      <Buttons text='Get Enroll'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginHorizontal: 15,
  },
  details:{
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: '#D9E0EF',
    width: 320,
    height: 80,
    justifyContent: 'space-between',
    padding: 10
  },
  row:{
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10
  }

})