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
  const handleAdd = () => {
    console.log(curItem);
    const action =
      curItem.category === "income"
        ? addItem(`PLUS_${curItem.category}`, {
            ...curItem,
            id: uuid.v4(),
            date: new Date().toLocaleDateString(),
          })
        : addItem(`MINUS_${curItem.category}`, {
            ...curItem,
            id: uuid.v4(),
            date: new Date().toLocaleDateString(),
          });
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
