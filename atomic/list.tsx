import styles from "@/app/styles";
import { View, Text } from "@/components/Themed";
import { memo } from "react";
import { FlatList } from "react-native";

const data = new Array(100).fill(null).map((v, i) => ({ key: i.toString(), value: `Item ${i}` }));

const List = memo(() => {
  return (
    <>
      <View style={styles.row}>
        <FlatList data={data} renderItem={({ item }) => <Text>{item.value}</Text>} />
      </View>
    </>
  );
});

export default List;
