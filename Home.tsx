import React from "react";
import { Button, StatusBar, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./router";
import styles from "./styles";

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Home({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' />
      <Text>Home Screen</Text>
      <Button title='First Item' onPress={() => navigation.navigate("Details", { title: "First Item" })} />
      <Button title='Second Item' onPress={() => navigation.navigate("Details", { title: "Second Item" })} />
      <Button title='Third Item' onPress={() => navigation.navigate("Details", { title: "Third Item" })} />
      <Button title='Settings' onPress={() => navigation.navigate("Settings")} />
    </View>
  );
}
