import { View } from "react-native";
import React from "react";

import Top from "./Top";
import List from "./List";
const DetailScreen = () => {
  
  return (
    <View className="px-5 bg-white h-full">
      <Top />

      <List />
    </View>
  );
};

export default DetailScreen;
