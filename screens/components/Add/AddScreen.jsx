import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Tag from "./Tag";
import Caculator from "./Caculator";
import { useDispatch } from "react-redux";
import { caculatorChange } from "../../redux/actions";
import Input from "./Input";
import AddButoon from "./AddButoon";
const AddScreen = () => {
  const [text, setText] = useState();
  const dispatch = useDispatch();
  const handleChange = (value) => {
    setText(value);
    dispatch(caculatorChange("DESCRIPTION", value));
  }
  return (
    <View className="px-10 bg-white h-full">
      <Tag />

      <Input/>

      <Caculator />

      <AddButoon/>
      
    </View>
  );
};

export default AddScreen;
