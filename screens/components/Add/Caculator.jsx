import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { caculatorChange } from "../../redux/actions";
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
  const [expression, setExpression] = useState("");
  const handleChange = (value) => {
    setExpression((preExpession) => {
      switch (value) {
        case "x":
          dispatch(caculatorChange("FEE", ""));
          return "";
        case ".":
          if (preExpession.length === 0 || preExpession.includes("."))
            return preExpession;
        default:
          dispatch(caculatorChange("FEE", preExpession + value));
          return preExpession + value;
      }
    });
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
      {console.log(expression)}
    </View>
  );
};

export default Caculator;
