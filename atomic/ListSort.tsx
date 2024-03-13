import { Text, View } from "@/components/Themed";
import React, { memo } from "react";

const arrows = new Map([
  [true, "▼"],
  [false, "▲"],
]);

type Props = {
  onSort: () => void;
  asc: boolean;
};

const ListSort = (props: Props) => {
  const { onSort, asc } = props;
  return <Text onPress={onSort}>{arrows.get(asc)}</Text>;
};

export default memo(ListSort);
