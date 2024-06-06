import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  Pressable
} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignIn from "./SignIn";
import ResetPass from "./ResetPass";
import UpdatedPass from "./UpdatedPass";
import SignUp from "./SignUp";
import Join from "./Join";
import Search from "../conponents/Search";
import SmallButton from "../conponents/SmallButton";
import HeaderText from "../conponents/HeaderText";
import MoreButtons from "../conponents/MoreButtons";
import OtherText from "../conponents/OtherText";
import Card from "../conponents/Card";

export default function Home(props) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={styles.row}>
          <HeaderText text="Welcome, Yasir" style={{ fontSize: 20 }} />
          <View style={{ flexDirection: "row" }}>
            <Image source={require("../images/Doorbell.png")} />
            <Image source={require("../images/Gear.png")} />
          </View>
        </View>
        <Search />
        <MoreButtons buttonsArray={["UI/UX", "Graphic Design", "Figma"]} />
        <View style={styles.row}>
          <HeaderText text="Continue Watching" style={{ fontSize: 16 }} />
          <Pressable onPress={()=>{props.navigation.navigate('CourseDetails')}}><OtherText text="See All"/></Pressable>
        </View>
      </View>
      <View style={{flex: 2,}}>
      <FlatList
        contentContainerStyle={{height: '100%'}}
        numColumns={2}
        data={[
          { course: "Website Design", by: "By Dawood Hanif", key: "1" },
          { course: "Video Editing", by: "By Ammar Ijaz", key: "2" },
          { course: "Graphic Design", by: "By Syyed Hussnain", key: "3" },
          { course: "Wire Framing", by: "By Shoaib Hassan", key: "4" },
          { course: "Website Design", by: "By Dawood Hanif", key: "5" },
          { course: "Video Editing", by: "By Ammar Ijaz", key: "6" },
          { course: "Graphic Design", by: "By Syyed Hussnain", key: "7" },
          { course: "Wire Framing", by: "By Shoaib Hassan", key: "8" },
        ]}
        renderItem={({ item }) => <Card course={item.course} by={item.by} />}
      />
      </View>

      {/* <Card course="Graphic Design" by="By Syyed Hussnain" />
        <Card course="Wire Framing" by="By Shoaib Hassan" />
      </View>
      <View style={[styles.row,{flex:1}]}>
        <Card course="Website Design" by="By Dawood Hanif" />
        <Card course="Video Editing" by="By Ammar Ijaz" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginHorizontal: 20,
    marginVertical: 5,
  },
});
