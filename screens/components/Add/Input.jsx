import { TextInput } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculatorChange } from "../../redux/actions";
import { inputSelector } from "../../redux/selectors";
const Input = () => {
  const text = useSelector(inputSelector)
  const dispatch = useDispatch();
  const handleChange = (value) => {
    dispatch(calculatorChange("DESCRIPTION", value));
  };
  return (
    <TextInput
      placeholder="Description"
      className="mt-10 text-xl border-b-[1px]"
      value={text}
      onChangeText={handleChange}
    ></TextInput>
  );
};

export default Input;
