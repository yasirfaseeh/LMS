import { StyleSheet, Text, View, FlatList } from "react-native";
import { useState, useEffect } from "react";
import app from "../firebase";
import { getFirestore, collection, query, onSnapshot, getDocs } from "firebase/firestore";

export default function Users() {

  const [dataArray, setDataArray] = useState([]);
  const db = getFirestore(app);
  const loadUsers = async () => {
  //   const dataArray = [];
  //   const querySnapshot = await getDocs(collection(db, "Users"));
  //     querySnapshot.forEach((doc) => {
  //     console.log(doc.id, " => ", doc.data());
  //     dataArray.push(doc.data());
  //   });
  //   setDataArray(dataArray);
  // };
  
  
  const q = query(collection(db, "Users"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const dataArray = [];
    querySnapshot.forEach((doc) => {
      dataArray.push(doc.data());
    });
    console.log(dataArray);
    setDataArray(dataArray);
});
  return unsubscribe;
}

useEffect(() => {
  let unsub = loadUsers();
  return () => unsub();
}, []);

const renderItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.email}</Text>
    </View>
  );
return (
        <FlatList 
          data={dataArray}
          renderItem={renderItem} 
          />
)
}

const styles = StyleSheet.create({});
