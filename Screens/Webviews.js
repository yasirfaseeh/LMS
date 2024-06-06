import { StyleSheet, Text, View, } from 'react-native'
import { Webview } from 'react-native-web'
import React from 'react'

export default function Webviews() {
  return (
    <Webview
        originWhiteList={['*']}
        source = {{html:'<h1>Hit there</h1>'}}
    />
  )
}

const styles = StyleSheet.create({})