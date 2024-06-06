import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignIn from "./Screens/SignIn";
import ResetPass from "./Screens/ResetPass";
import UpdatedPass from "./Screens/UpdatedPass";
import SignUp from "./Screens/SignUp";
import Join from "./Screens/Join";
import Home from "./Screens/Home";
import Cources from "./Screens/Cources";
import Inbox from "./Screens/Inbox";
import Profile from "./Screens/Profile";
import OnBoardingOne from "./Screens/OnBoardingOne";
import OnBoardingTwo from "./Screens/OnBoardingTwo";
import OnBoardingThree from "./Screens/OnBoardingThree";
import OnBoardingFour from "./Screens/OnBoardingFour";
import Webviews from "./Screens/Webviews";
import CourseDetails from "./Screens/CourseDetails";
import Locations from "./Screens/Locations";
import MyProfile from "./Screens/MyProfile";
import Users from "./Screens/Users";
import Push from "./Screens/Push";

const Tab = createBottomTabNavigator();
const MyTabs = function () {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Image
                  source={require("./images/Home.png")}
                  resizeMode="contain"
                  style={{
                    width: 40,
                    height: 30,
                    tintColor: focused ? "red" : "black",
                  }}
                />
                <Text style={{ color: focused ? "red" : "black" }}>Home</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="My Cources"
        component={Cources}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Image
                  source={require("./images/Cources.png")}
                  resizeMode="contain"
                  style={{
                    width: 40,
                    height: 30,
                    tintColor: focused ? "red" : "black",
                  }}
                />
                <Text style={{ color: focused ? "red" : "black" }}>
                  Cources
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Inbox}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Image
                  source={require("./images/Inbox.png")}
                  resizeMode="contain"
                  style={{
                    width: 40,
                    height: 30,
                    tintColor: focused ? "red" : "black",
                  }}
                />
                <Text style={{ color: focused ? "red" : "black" }}>Inbox</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Image
                  source={require("./images/Profile.png")}
                  resizeMode="contain"
                  style={{
                    width: 40,
                    height: 30,
                    tintColor: focused ? "red" : "black",
                  }}
                />
                <Text style={{ color: focused ? "red" : "black" }}>
                  My Profile
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Webview" component={Webviews} /> */}
        <Stack.Screen name="Locations" component={Locations} />
        {/* <Stack.Screen name="Push" component={Push} /> */}
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="MyProfile" component={MyProfile} />
        <Stack.Screen name="Users" component={Users} />
        <Stack.Screen name="OnBoardingOne" component={OnBoardingOne} />
        <Stack.Screen name="OnBoardingTwo" component={OnBoardingTwo} />
        <Stack.Screen name="OnBoardingThree" component={OnBoardingThree} />
        <Stack.Screen name="OnBoardingFour" component={OnBoardingFour} />
        <Stack.Screen name="Join" component={Join} />
        <Stack.Screen name="ResetPass" component={ResetPass} />
        <Stack.Screen name="UpdatedPass" component={UpdatedPass} />
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="CourseDetails" component={CourseDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// export default function App(){
//  return(
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
// )
// }
