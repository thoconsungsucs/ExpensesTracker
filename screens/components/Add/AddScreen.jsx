import { View, Switch } from "react-native";
import React, { useState } from "react";
import Tag from "./Tag";
import Caculator from "./Caculator";
import Input from "./Input";
import AddButoon from "./AddButoon";
const AddScreen = () => {
  
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
