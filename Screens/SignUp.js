import { StyleSheet, Text, View } from "react-native";
import React from "react";
import app from "../firebase";
import HeaderText from "../conponents/HeaderText";
import OtherText from "../conponents/OtherText";
import InputText from "../conponents/InputText";
import Buttons from "../conponents/Buttons";
import HorizontalLine from "../conponents/HorizontalLine";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
} from "firebase/firestore";

export default function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(null);

  const auth = getAuth();
  const db = getFirestore(); // initialize firestore instance

  const signUp = async () => {
    // const collectionRef = collection(db, 'Users') //auto-genetated-id, takes collection ref and data as params, overwrite if doc already exist
    // await addDoc(collectionRef, {name, email})
    try {
      const docRef = doc(db, "Users", email); //specific id, takes doc ref and data as params, throws exception if doc already exist
      await setDoc(docRef, { name, email });
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account Created");
      props.navigation.navigate("SignIn");
    } catch (error) {
      console.log(error);
      alert("Sign in failed: " + error.message);
    }
  };

  return (
    <View>
      <HeaderText text="Sign Up" />
      <OtherText text="Create an account to begin your Learning Journey" />
      <OtherText text="Full Name:" style={{ textAlign: "left" }} />
      <InputText
        value={name}
        onChangeText={(t) => {
          setName(t);
        }}
      />
      <OtherText text="Email:" style={{ textAlign: "left" }} />
      <InputText
        value={email}
        onChangeText={(t) => {
          setEmail(t);
        }}
      />
      <OtherText text="Password:" style={{ textAlign: "left" }} />
      <InputText
        secure
        value={password}
        onChangeText={(t) => {
          setPassword(t);
        }}
      />
      <OtherText text="Confirm Password:" style={{ textAlign: "left" }} />
      <InputText secure />
      <Buttons text="Sign Up" onPress={signUp} />
      <HorizontalLine text="Or Sign Up With" />
      <Buttons text="Sign Up With Facebook" />
      <OtherText
        text="Already have an account? Sign in Here"
        onPress={() => {
          props.navigation.navigate("SignIn");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
