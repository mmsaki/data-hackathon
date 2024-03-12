import React from "react";
import { StatusBar, View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./router";
import styles from "./styles";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

function Details({ route }: Props) {
  const { title } = route.params;
  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' />
      <Text>{title}</Text>
    </View>
  );
}

export default Details;
