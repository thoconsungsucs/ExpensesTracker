import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Tag from "./components/Tag";
import Caculator from "./components/Caculator";

const AddScreen = () => {
  return (
    <View className="px-10 bg-white h-full">
      <Tag />
      <TextInput
        placeholder="Chi tiết"
        className="mt-10 text-xl border-b-[1px]"
      ></TextInput>

      <Caculator />

      <TouchableOpacity className="bg-orange-200 rounded-3xl flex items-center justify-center mt-4">
        <Text className="text-3xl p-4 text-white font-semibold">
          Thêm chi tiêu
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddScreen;
