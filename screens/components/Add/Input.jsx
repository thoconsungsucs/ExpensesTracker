import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { caculatorChange } from "../../redux/actions";
import { inputSelector } from "../../redux/selectors";
const Input = () => {
  const text = useSelector(inputSelector)
  const dispatch = useDispatch();
  const handleChange = (value) => {
    dispatch(caculatorChange("DESCRIPTION", value));
  };
  return (
    <TextInput
      placeholder="Chi tiết"
      className="mt-10 text-xl border-b-[1px]"
      value={text}
      onChangeText={handleChange}
    ></TextInput>
  );
};

export default Input;
