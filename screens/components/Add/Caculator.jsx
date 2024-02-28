import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { caculatorChange } from "../../redux/actions";
import { caculatorSelector } from "../../redux/selectors";
const Caculator = () => {
  const caculator = [
    "1",
    "2",
    "3",
    "0",
    "4",
    "5",
    "6",
    ".",
    "7",
    "8",
    "9",
    "x",
  ];

  const dispatch = useDispatch();
  const fee = useSelector(caculatorSelector);
  const handleChange = (value) => {
    switch (value) {
      case "x":
        dispatch(caculatorChange("FEE", ""));
        return "";
      case ".":
        if (fee === 0 || fee.includes("."))
          return fee;
      default:
        dispatch(caculatorChange("FEE", fee + value));
    }
  };

  return (
    <View className="mt-10 flex flex-wrap flex-row justify-between ">
      {caculator.map((value) => (
        <TouchableOpacity
          className="w-[60px] h-[60px] bg-slate-100 flex items-center justify-center rounded-full mb-5"
          key={value}
          onPress={() => handleChange(value)}
        >
          <Text className="text-3xl font-light">{value}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Caculator;
