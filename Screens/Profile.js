import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import HeaderText from '../conponents/HeaderText'
import OtherText from '../conponents/OtherText'

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <View style={styles.details}>
        <HeaderText text='Yasir Faseeh' style={{fontSize:22, marginTop: 50}}/>
        <OtherText text='"Empowering Digital Experiences"'/>
        <HeaderText text='About Me' style={{fontSize:18, textAlign: 'left', marginLeft:15}}/>
        <OtherText text='Lorem ipsum dolor sit amet consectetur. Nec eget accumsan molestie proin. Integer rhoncus vitae nisi natoque ac mus tellus scelerisque gravida.' style={{color: 'grey', fontSize: 12, textAlign:'left'}}/>
        <HeaderText text='My Skills' style={{fontSize:18, textAlign: 'left', marginLeft:15}}/>
        <OtherText text='Lorem ipsum dolor sit amet consectetur. Nec eget accumsan molestie proin. Integer rhoncus vitae nisi natoque ac mus tellus scelerisque gravida.' style={{color: 'grey', fontSize: 12, textAlign:'left'}}/>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
  },
  circle:{
    position: 'relative',
    top: '10%',
    backgroundColor: "#C6C6C6",
    width: 100,
    height: 100,
    borderRadius: 50,
    marginHorizontal: 'auto' ,
    shadowColor: "#000",
    shadowRadius: 5,
    elevation: 10,
    zIndex: 1,
  },
  details:{
    backgroundColor:'#E5EAF4',
    borderRadius: 10,
    width: '90%',
    height: '70%',
    marginHorizontal: 'auto'
  }
})