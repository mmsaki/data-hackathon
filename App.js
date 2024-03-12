import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.boxText}>Open up App.js to start working on your app!</Text>
      </View>
      <StatusBar style='auto' />
    </View>
  );
}
