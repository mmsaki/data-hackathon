import React, { memo } from "react";
import { View } from "@/components/Themed";
import ListFilter from "./ListFilter";
import ListSort from "./ListSort";
import styles from "@/app/styles";

type Props = {
  onFilter: (text: string) => void;
  onSort: () => void;
  asc: boolean;
};

const ListControls = (props: Props) => {
  const { onFilter, onSort, asc } = props;
  return (
    <View style={styles.controls}>
      <ListFilter onFilter={onFilter} />
      <ListSort onSort={onSort} asc={asc} />
    </View>
  );
};

export default memo(ListControls);
