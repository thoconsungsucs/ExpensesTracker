import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
const Item = () => {
  return (
    <View
      className="flex-row bg-[#F8F7FC] p-2 rounded-2xl mb-3 items-center"
      style={{ elevation: 1 }}
    >
      <View className="p-2 mr-3">
        <AntDesign name="shoppingcart" size={44} color="#F193C1" />
      </View>

      <View className="flex space-y-1 py-3 flex-1">
        <Text className="font-semibold">Mua sắm</Text>
        <Text>Gần nhất: Orange</Text>
      </View>

      <View className="flex space-y-1 py-3 items-end">
        <Text className="text-red-500">-$1320</Text>
        <Text className="font-extralight">29/01</Text>
      </View>
    </View>
  );
};

export default Item;
