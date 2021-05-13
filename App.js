import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import axios from "axios";

import { Loading } from "./Loading";
import { Weather } from "./Weather";

const API_KEY = "1470756d19e9f0be095ce8b3473e383b";

export default function App() {
  const [location, setLocation] = useState(null);
  const [dataWeather, setDataWeather] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("1Permission to access location was denied");
        return;
      }

      let {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});

      getWeather(latitude, longitude);
    })();
  }, []);

  const getWeather = async (lat, lon) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    setDataWeather({
      temp: temp,
      condition: weather[0].main,
    });
    setLocation(true);
  };

  return !location ? <Loading /> : <Weather condition={dataWeather.condition} temp={Math.round(dataWeather.temp)} />;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
