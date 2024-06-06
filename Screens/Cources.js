import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import Course from '../conponents/Course'

export default function Cources() {
  return (
    <View>
        <FlatList
          data={[
          {course: 'Website Design', by: 'By Dawood Hanif', key:'1'},
          {course: 'Video Editing', by:'By Ammar Ijaz', key:'2'},
          {course: 'Graphic Design', by:'By Syyed Hussnain', key:'3'},
          {course: 'Wire Framing', by:'By Shoaib Hassan', key:'4'},
          {course: 'Wire Framing', by:'By Shoaib Hassan', key:'5'},
          {course: 'Wire Framing', by:'By Shoaib Hassan', key:'6'},
          {course: 'Wire Framing', by:'By Shoaib Hassan', key:'7'},
          {course: 'Wire Framing', by:'By Shoaib Hassan', key:'8'},
          {course: 'Wire Framing', by:'By Shoaib Hassan', key:'9'},
          ]}
          renderItem={({item})=>(
            <Course course={item.course} by={item.by}/>
          )}
        />
        </View>
  )
}

const styles = StyleSheet.create({})