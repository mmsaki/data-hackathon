import React from "react";
import { View, Text } from "@/components/Themed";

// mock data

const useContent = () => {
  const data = new Array(100).fill(null).map((v, i) => ({ key: i.toString(), value: `Item ${i}` }));

  return {
    content: data,
  };
};

export default useContent;
