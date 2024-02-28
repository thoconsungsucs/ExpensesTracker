import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
const Item = ({type, lastItem, fee, date }) => {
  return (
    <View
      className="flex-row bg-[#F8F7FC] p-2 rounded-2xl mb-3 items-center"
      style={{ elevation: 1 }}
    >
      <View className="p-2 mr-3">
        {/* #F193C1 */}
        <AntDesign name="shoppingcart" size={44} color="black" />
      </View>

      <View className="flex space-y-1 py-3 flex-1">
        <Text className="font-semibold">{type}</Text>
        <Text>Gần nhất: {lastItem || "..."}</Text>
      </View>

      <View className="flex space-y-1 py-3 items-end">
        {type === "Lương" ? (
          <Text className="text-green-500">+${fee || 0}</Text>
        ) : (
          <Text className="text-red-500">-${fee || 0}</Text>
        )}

        <Text className="font-extralight">
          {date ? date.substring(0, 5) : ""}
        </Text>
      </View>
    </View>
  );
};

export default Item;
