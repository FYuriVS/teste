import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import "./components/Primeiro";
import Primeiro from "./components/Primeiro";
import CompPadrao, { Comp1, Comp2 } from "./components/Multi";
import MinMax from "./components/MinMax";
import Routes from "./src/routes";

import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <View style={styles.App}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>

      {/* <Aleatorio min={10} max={60} />
      <Aleatorio min={10} max={60} />
      <Aleatorio min={10} max={60} />
      <Aleatorio min={10} max={60} />
      <MinMax min="3" max="20" />
      <Comp2 />
      <Comp1 />
      <CompPadrao />
      <Primeiro />
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  App: {
    flex: 1,
    padding: 0,
    margin: 0,
  },
});
