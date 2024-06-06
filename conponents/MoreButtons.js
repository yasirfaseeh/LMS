import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SmallButton from './SmallButton'

export default function MoreButtons(props) {
    const {buttonsArray} = props;
    return (
        <View style={styles.buttons}>
    {buttonsArray.map((item, index)=>{
       return(
        <SmallButton text={item} key={index}/>
    ) 
    })}
      </View>
  )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        marginHorizontal: "auto",
      }
})