import React from "react";
import { Button, StatusBar, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Routes } from "./router";
import styles from "./styles";

type Props = NativeStackScreenProps<Routes>;

export default function Home({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' />
      <Text>Home Screen</Text>
      <Button title='First Item' onPress={() => navigation.navigate("Details", { title: "First Item", content: "First Item Content", stock: 1 })} />
      <Button title='Second Item' onPress={() => navigation.navigate("Details", { title: "Second Item", content: "Second Item Content", stock: 0 })} />
      <Button title='Third Item' onPress={() => navigation.navigate("Details", { title: "Third Item", content: "Third Item Content", stock: 1 })} />
      <Button title='Settings' onPress={() => navigation.navigate("Settings")} />
    </View>
  );
}
