import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Messages from '../conponents/Messages'
import Buttons from '../conponents/Buttons'
import Search from '../conponents/Search'

export default function Inbox() {
  return (
    <View>
      <Search/>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <Buttons text='Chat' style={{width: '40%', borderRadius: 50}}/>
      <Buttons text='Calls' style={{width: '40%', borderRadius: 50}} fill/>
      </View>
      <FlatList
        data={[
        {name:'Yasir Faseeh', message:'Hi how are you?', noOfMessages:'03', time:'01:06 PM', key:'1'},
        {name:'Yahya Khan', message:'Text me when you get free?', noOfMessages:'06', time:'01:06 PM', key:'2'},
        {name:'Ahsan Mujahid', message:'What"s going on buddy?', noOfMessages:'04', time:'01:06 PM', key:'3'},
        {name:'Kumail', message:'Its not going to work', noOfMessages:'01', time:'01:06 PM', key:'4'},
        {name:'Yasir Faseeh', message:'Hi how are you?', noOfMessages:'03', time:'01:06 PM', key:'5'},
        {name:'Yahta Khan', message:'Text me when you get free?', noOfMessages:'06', time:'01:06 PM', key:'6'},
        {name:'Ahsan Mujahid', message:'What"s going on buddy?', noOfMessages:'04', time:'01:06 PM', key:'7'},
        {name:'Kumail', message:'Its not going to work', noOfMessages:'01', time:'01:06 PM', key:'8'},
        {name:'Yasir Faseeh', message:'Hi how are you?', noOfMessages:'03', time:'01:06 PM', key:'9'},
        {name:'Yahta Khan', message:'Text me when you get free?', noOfMessages:'06', time:'01:06 PM', key:'10'},
        {name:'Ahsan Mujahid', message:'What"s going on buddy?', noOfMessages:'04', time:'01:06 PM', key:'11'},
        {name:'Kumail', message:'Its not going to work', noOfMessages:'01', time:'01:06 PM', key:'12'},
        ]}
        renderItem={({ item })=>(
          <Messages 
          name={item.name} 
          message={item.message} 
          noOfMessages={item.noOfMessages} 
          time={item.time}/>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({})