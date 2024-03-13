import { View, Text } from "@/components/Themed";
import React, { memo, useMemo, useState } from "react";
import mapItems from "@/utils/mapItems";
import filterAndSort from "@/utils/filterAndSort";
import List from "./List";
import { Content } from "./types";

type Props = {
  content: Array<{ key: string; value: string }>;
};

const ListContainter = (props: Props) => {
  const [asc, setAsc] = useState(true);
  const [filter, setFilter] = useState("");
  const { content } = props;

  const data = useMemo(() => {
    return filterAndSort(
      filter,
      asc,
      content.map((i) => i.value)
    );
  }, [filter, asc]);

  return <List content={mapItems(data)} onFilter={(text) => setFilter(text)} onSort={() => setAsc(!asc)} asc={asc} />;
};

export default memo(ListContainter);
