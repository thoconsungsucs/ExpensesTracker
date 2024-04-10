import { View, Text, TouchableOpacity, Vibration } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../redux/actions";
const Item = ({ category, lastItem, fee, hour, id, icon, date, name }) => {
  
  const dispatch = useDispatch();
  const handleDeleted = () => {
    if (!hour || hour.includes("/")) return;
    Vibration.vibrate();
    dispatch(deleteItem({ id, category, fee, date }));
  };
  return (
    <TouchableOpacity
      className="flex-row bg-[#F8F7FC] p-2 rounded-2xl mb-3 items-center"
      style={{ elevation: 1 }}
      onLongPress={handleDeleted}
    >
      <View className="p-1 mr-2">
        {icon && icon()}
      </View>

      <View className="flex space-y-1 py-3 flex-1">
        <Text className="font-semibold">{name}</Text>
        <Text>Last: {lastItem || "..."}</Text>
      </View>

      <View className="flex space-y-1 py-3 px-1 items-end">
        {name === "Salary" ? (
          <Text className="text-green-500">${fee || 0}</Text>
        ) : (
          <Text className="text-red-500">${fee || 0}</Text>
        )}

        <Text className="font-extralight">{hour}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
