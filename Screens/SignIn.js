import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderText from "../conponents/HeaderText";
import OtherText from "../conponents/OtherText";
import InputText from "../conponents/InputText";
import Buttons from "../conponents/Buttons";
import HorizontalLine from "../conponents/HorizontalLine";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const storeUserCredentials = async () => {
    try {
      await AsyncStorage.setItem("email", email);
      await AsyncStorage.setItem("password", password);
    } catch (error) {
      console.log(error);
    }
  };
  // const getUserCredentials = async ()=>{
  //   try{
  //     let email = await AsyncStorage.getItem('email')
  //     let password = await AsyncStorage.getItem('password')
  //     console.log(email, password);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  const signIn = async () => {
    if (email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Signed In");
        props.navigation.navigate("Users");
        // props.navigation.navigate("Home");
        await storeUserCredentials();
      } catch (error) {
        alert("Sign in failed: " + error.message);
      }
    } else {
      alert("Enter your credentials");
    }
  };
  useEffect(() => {
    const getUserCredentials = async () => {
      try {
        const email = await AsyncStorage.getItem("email");
        const password = await AsyncStorage.getItem("password");
        setEmail(email);
        setPassword(password);
      } catch (error) {
        console.log(error);
      }
    };
    getUserCredentials();
  }, []);
  return (
    <View>
      <HeaderText text="Sign in" />
      <OtherText text="Please Sign in with your account" />
      <OtherText text="Email Here:" style={{ textAlign: "left" }} />
      <InputText
        value={email}
        onChangeText={(t) => {
          setEmail(t);
        }}
      />
      <OtherText text="Password:" style={{ textAlign: "left" }} />
      <InputText
        value={password}
        secure
        onChangeText={(t) => {
          setPassword(t);
        }}
      />
      <OtherText
        text="Forget Password?"
        style={{ textAlign: "right" }}
        onPress={() => {
          props.navigation.navigate("ResetPass");
        }}
      />
      <Buttons text="Sign In" fill onPress={signIn} />
      <HorizontalLine text="Or Sign In With" />
      <Buttons text="Sign In With Facebook" />
      <Buttons text="Sign In With Google" />
      <OtherText text="Didn’t have an account? Sign up Here" />
    </View>
  );
}

const styles = StyleSheet.create({});
