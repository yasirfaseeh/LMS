import { Alert, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import axios from 'axios';


const Locations = () => {
  const [location, setLocation] = useState(null);
  const [data, setData] = useState(null);
  

  useEffect(() => {
    const getPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to location not granted");
        return;
      }
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      // Alert.alert("Location", JSON.stringify(currentLocation));
    };
    getPermission();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (location){
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=eb06ce42ac269d835a36f694f43538e2&units=metric`);
        setData(response.data)
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    };
    
    fetchData();
  }, [location]);


  return (
    <View>
      <Text>Location</Text>
      {location && (
        <Text>
          Latitude: {location.coords.latitude}, Longitude:{location.coords.longitude}
        </Text>
      )}
      {data && (
        <>
          <Text>Country: {data.sys.country}</Text>
          <Text>City: {data.name}</Text>
          <Text>Temperature: {data.main.temp}°C</Text>
          <Text>Weather: {data.weather[0].description}°C</Text>
        </>
      )}
    </View>
  );
};

export default Locations;

const styles = StyleSheet.create({});
