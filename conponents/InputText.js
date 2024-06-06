import { StyleSheet, Text, View, TextInput} from 'react-native'
import React from 'react'

export default function InputText(props) {
  return (
    <View>
      <TextInput style={styles.input} value={props.value} secureTextEntry={props.secure} onChangeText={props.onChangeText}/>
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        textAlign: 'center',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 20,
        marginVertical: 5,
        height: 46,

    }
})