import { View, Text } from "react-native";
import React from "react";
import BlinkingCursorTextInput from "./BlinkingCursorTextInput";
import { Dropdown } from "./Dropdown";
import { useSelector } from "react-redux";
import { caculatorSelector } from "../../redux/selectors";

const Tag = () => {
  const date = new Date();
  const today = date.toDateString();

  const fee = useSelector(caculatorSelector);
  return (
    <View
      className="w-full bg-slate-100 flex items-center p-5 rounded-2xl mt-10 z-30 pb-7"
      style={{ elevation: 2 }}
    >
      <Text className="text-xl font-extralight mb-2">{today}</Text>
      <View className="flex-row">
        <Text className="pt-3 text-5xl text-[#F8908E] font-semibold">
          ${fee}
        </Text>
        <BlinkingCursorTextInput />
      </View>
      <Dropdown />
    </View>
  );
};

export default Tag;
