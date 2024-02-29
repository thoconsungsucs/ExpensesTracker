import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/actions";
import { curItemSelector } from "../../redux/selectors";
import { caculatorSelector } from "../../redux/selectors";
import uuid from "react-native-uuid";

const AddButoon = () => {
  const curItem = useSelector(curItemSelector);
  const dispatch = useDispatch();

  const getCurrentHourAndMinutes = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0"); // Đảm bảo giờ có 2 chữ số
    const minutes = now.getMinutes().toString().padStart(2, "0"); // Đảm bảo phút có 2 chữ số
    return `${hours}:${minutes}`;
  };

  const currentHourAndMinutes = getCurrentHourAndMinutes();
  const newItem = {
    ...curItem,
    id: uuid.v4(),
    date: new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
    hour: getCurrentHourAndMinutes(),
  };
  const handleAdd = () => {
    const action =
      curItem.category === "income"
        ? addItem(`PLUS_${curItem.category}`, newItem)
        : addItem(`MINUS_${curItem.category}`, newItem);
    dispatch(action);
  };
  return (
    <View
      className="w-fit bg-white mx-auto mt-4 rounded-3xl"
      style={{ elevation: 5 }}
    >
      <TouchableOpacity
        className="bg-orange-200 rounded-3xl flex items-center justify-center"
        onPress={handleAdd}
      >
        <Text className="text-3xl p-4 text-white font-semibold px-11">
          Thêm chi tiêu
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddButoon;
