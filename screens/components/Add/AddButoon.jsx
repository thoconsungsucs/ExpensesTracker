import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/actions";
import { curItemSelector } from "../../redux/selectors";

const AddButoon = () => {
  const curItem = useSelector(curItemSelector);
  const dispatch = useDispatch();
  const handleAdd = () => {
    // const action =
    //   curItem.category === "Lương"
    //     ? addItem(`PLUS_${curItem.category}`, curItem)
    //     : addItem(`MINUS_${curItem.category}`, curItem);
    // dispatch(action);

    dispatch({type: "DELETE", payload: ""})
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
