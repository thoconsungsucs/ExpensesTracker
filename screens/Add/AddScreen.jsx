import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Tag from "./Tag";
import Caculator from "./Caculator";

const AddScreen = () => {
  return (
    <View className="px-10 bg-white h-full">
      <Tag />
      <TextInput
        placeholder="Chi tiết"
        className="mt-10 text-xl border-b-[1px]"
      ></TextInput>

      <Caculator />

      <View
        className="w-fit bg-white mx-auto mt-4 rounded-3xl"
        style={{ elevation: 5 }}
      >
        <TouchableOpacity className="bg-orange-200 rounded-3xl flex items-center justify-center">
          <Text className="text-3xl p-4 text-white font-semibold px-11">
            Thêm chi tiêu
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddScreen;
