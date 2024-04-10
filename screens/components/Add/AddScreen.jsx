import { View } from "react-native";
import React from "react";
import Tag from "./Tag";
import Calculator from "./Calculator";
import Input from "./Input";
import AddButton from "./AddButton";
const AddScreen = () => {
  return (
    
      <View className="px-10 bg-white h-full">
        <Tag />

        <Input />

        <Calculator />

        <AddButton />
      </View>
    
  );
};

export default AddScreen;
