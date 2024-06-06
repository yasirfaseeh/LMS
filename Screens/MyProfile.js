import { View, Text, Pressable} from 'react-native';
import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import app from '../firebase';




// async function getUserDocument(docId) {
  //   const docRef = doc(db, 'Users', docId);
  //   const userData = await getDoc(docRef);
  //   return userData.data();
  // }
  
  export default function MyProfile(props) {
    const [userData, setUserData] = useState(null);
    const auth = getAuth()
    const db = getFirestore(app);
    
    alert(auth.currentUser.email)
    const loadProfile = async ()=>{
      let profile = await getDoc(doc(db, 'Users', auth.currentUser.email))
      setUserData(profile.data())
    }

  useEffect(() => {
    // const fetchUserData = async () => {
    //   const userData = await getUserDocument('UserOne');
    //   setUserData(userData);
    // };
    // fetchUserData();
    loadProfile()
  }, []);

  if (!userData) {
    return <View><Text>Loading...</Text></View>;
  }

  return (
    <View>
      <Text>{auth.currentUser.email}</Text>
      <Text>Name: {userData.name}</Text>
      <Text>Email: {userData.email}</Text>
      <Pressable onPress={props.navigation.navigate('Users')}><Text>Go to users</Text></Pressable>
    </View>
  );
}