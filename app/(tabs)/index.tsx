import { Text, View } from "@/components/Themed";
import styles from "../styles";
import List from "@/atomic/List";
import useContent from "@/hooks/useContent";
import ListContainter from "@/atomic/ListContainter";

const News = () => {
  const { content } = useContent();
  return (
    <View style={styles.container}>
      <Text>News</Text>
      <ListContainter content={content} />
    </View>
  );
};

export default News;
