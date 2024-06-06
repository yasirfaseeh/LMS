import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Overview from './Overview';
import Lesson from './Lesson';
import Reviews from './Reviews';

const Tab = createMaterialTopTabNavigator();

function TopTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Overview" component={Overview} />
      <Tab.Screen name="Lesson" component={Lesson} />
      <Tab.Screen name="Review" component={Reviews} />
    </Tab.Navigator>
  );
}

export default function CourseDetails() {
  return (
    <TopTabs/>
  )
}

const styles = StyleSheet.create({

})