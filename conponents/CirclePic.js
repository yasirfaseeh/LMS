import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CirclePic() {
  return (
    <View style={styles.container}>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 10,
        borderColor: '#EDE9E9',
        borderRadius: 150,
        backgroundColor: '#D9D9D9',
        height: 300,
        width: 300,
        alignSelf: 'center',
        margin: 20,
    }
})