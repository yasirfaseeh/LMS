import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import HeaderText from '../conponents/HeaderText'
import OtherText from '../conponents/OtherText'
import InputText from '../conponents/InputText'
import Buttons from '../conponents/Buttons'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'

export default function ResetPass(props) {
  const [email, setEmail] = useState(null)
  const auth = getAuth()
  const handleResetPassword = async ()=>{
    if(email){
      try{
        await sendPasswordResetEmail(auth, email);
        alert('Email Sent Successfully')
        props.navigation.navigate('SignIn')
      } catch(error){
        console.log(error);
        alert('Error', error.message)
      }
    } else {
      alert('Enter the email')
    }
  } 

  return (
    <View style={styles.container}>
      <HeaderText text='Reset Password'/>
      {/* <OtherText text='At least 9 characters with uppercase and lowercase letters'/> */}
      <OtherText text='Enter Your Email:' style={{textAlign: 'left'}}/>
      <InputText onChangeText={(t)=>{setEmail(t)}} />
      {/* <OtherText text='Confirm Password:' style={{textAlign: 'left'}}/>
      <InputText/> */}
      <Buttons text='Send Reset Passwarod Email' 
      // onPress={()=>{props.navigation.navigate('UpdatedPass')}}
      onPress = {handleResetPassword}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center'
    }
})