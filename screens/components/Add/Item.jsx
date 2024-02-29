import { View, Text, TouchableOpacity, Vibration } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../redux/actions";
const Item = ({ type, lastItem, fee, hour, id }) => {
  const dispatch = useDispatch();
  const handleDeleted = () => {
    Vibration.vibrate();
    dispatch(deleteItem(id));
  };
  return (
    <TouchableOpacity
      className="flex-row bg-[#F8F7FC] p-2 rounded-2xl mb-3 items-center"
      style={{ elevation: 1 }}
      onLongPress={handleDeleted}
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

        <Text className="font-extralight">{hour}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
