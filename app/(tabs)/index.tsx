import { Text, View } from "@/components/Themed";
import styles from "../styles";
import List from "@/atomic/list";

const News = () => {
  return (
    <View style={styles.container}>
      <Text>News</Text>
      <List />
    </View>
  );
};

export default News;
