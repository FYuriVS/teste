import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";

export default (props) => {
  const { max, min } = props;

  const delta = max - min + 1;

  const aleatório = parseInt(Math.random() * delta + min);
  return <Text style={estilo.txtG}>O valor aleatório é {aleatório}</Text>;
};
