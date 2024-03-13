import React from "react";
import styles from "@/app/styles";
import { View, Text } from "@/components/Themed";
import { memo } from "react";
import { FlatList } from "react-native";
import ListControls from "./ListControls";
import { Content } from "./types";

type Props = {
  content: Array<{ key: string; value: string }>;
  onFilter: (text: string) => void;
  onSort: () => void;
  asc: boolean;
};

const List = (props: Props) => {
  const { content, onFilter, onSort, asc } = props;
  return (
    <>
      <View style={styles.row}>
        <FlatList data={content} ListHeaderComponent={<ListControls {...{ onFilter, onSort, asc }} />} renderItem={({ item }) => <Text>{item.value}</Text>} />
      </View>
    </>
  );
};

export default memo(List);
