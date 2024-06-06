import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import OtherText from "./OtherText";

export default function Card(props) {
  return (
    <View style={styles.container}>
      <View style={styles.card}></View>
      <View style={styles.row}>
        <OtherText text={props.course} style={{fontSize: 12, marginHorizontal:0, marginRight: 10}} />
        <Image source={require("../images/Stars.png")} />
      </View>
    <OtherText text={props.by} style={{fontSize: 10, color:'grey', alignself: 'flex-start'}} />
    <Image source={require('../images/Bar.png') } style={{width:'85%'}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
    justifyContent: 'center',
    alignItems:'center',

  },
  card: {
    backgroundColor: "white",
    width: "90%",
    height: "50%",
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    elevation: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: 'center',
  },
});
