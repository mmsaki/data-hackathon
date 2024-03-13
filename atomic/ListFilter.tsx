import styles from "@/app/styles";
import { Text, View, TextInput } from "@/components/Themed";
import React, { memo } from "react";

type Props = {
  onFilter: (text: string) => void;
};

const ListFilter = (props: Props) => {
  const { onFilter } = props;
  return (
    <View>
      <TextInput autoFocus placeholder='Search' style={styles.filter} onChangeText={onFilter} />
    </View>
  );
};

export default memo(ListFilter);
