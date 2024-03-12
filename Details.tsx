import React from "react";
import { StatusBar, View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Routes } from "./router";
import styles from "./styles";

type Props = NativeStackScreenProps<Routes, "Details">;

function Details({ route, navigation }: Props) {
  const { content, title } = route.params;
  React.useEffect(() => {
    navigation.setOptions({ title });
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' />
      <Text>{content}</Text>
    </View>
  );
}

export default Details;
