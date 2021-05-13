import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const wetherOption = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#141E30", "#243B55"],
    title: "Сиди дома",
    subtitle: "Ты видишь что на улице?",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#3a7bd5", "#3a6073"],
    title: "Возьми зонтик",
    subtitle: "Возможно скоро дождь усилится ",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#000046", "#1CB5E0"],
    title: "На улице дождь",
    subtitle: "А значит скоро будет радуга!",
  },
  Snow: {
    iconName: "snowflake",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "На улице снежок!",
    subtitle: "Одевайтесь потеплее, лепите снеговиков",
  },
  Dust: {
    iconName: "weather-windy-variant",
    gradient: ["#B79891", "#94716B"],
    title: "Пыльно",
    subtitle: "Лучше закройте окна",
  },
  Smoke: {
    iconName: "weather-windy",
    gradient: ["#56CCF2", "#2F80ED"],
    title: "На улице смог :(",
    subtitle: "Не советую выходить без необходимости",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#3E5151", "#DECBA4"],
    title: "На улице снежок!",
    subtitle: "Одевайтесь потеплее, лепите снеговиков",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#606c88", "#3f4c6b"],
    title: "Ни черта не видно в тумане",
    subtitle: "Зато как в Сайлент-Хилле :)",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#56CCF2", "#2F80ED"],
    title: "Погода супер :)",
    text: "Хватит сидеть дома собирайся и иди на улицу",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#757F9A", "#D7DDE8"],
    title: "Облака",
    subtitle: "Белогривые лошадки",
  },
};

export const Weather = ({ temp, condition }) => {
  return (
    <LinearGradient colors={wetherOption[condition].gradient} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons name={wetherOption[condition].iconName} size={96} color="black" />
        <Text style={[styles.temp, { color: wetherOption[condition].colorText }]}>{temp}°</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{wetherOption[condition].title}</Text>
        <Text style={styles.text}>{wetherOption[condition].text}</Text>
      </View>
    </LinearGradient>
  );
};

Weather.PropTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Dust", "Smoke", "Haze", "Mist", "Clear", "Clouds"]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "#fff",
  },
  title: {
    fontSize: 44,
    color: "white",
    marginBottom: 10,
    fontWeight: "300",
  },
  text: {
    color: "white",
    fontWeight: "600",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
