import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/actions";
import { curItemSelector } from "../../redux/selectors";
import uuid from "react-native-uuid";
import { ALERT_TYPE, Toast } from "react-native-alert-notification";

const categories = {
  shopping: "Shopping",
  food: "Food",
  travel: "Travel",
  fixed: "Fixed",
  income: "Salary",
  others: "Others",
};

const AddButton = () => {
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
    hour: currentHourAndMinutes,
  };

  const handleAdd = () => {
    if (newItem.category && newItem.fee && newItem.description) {
      const action = addItem(`${curItem.category}`, newItem);
      dispatch(action);
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: "Success",
        textBody: `Expense: ${newItem.description}\nMoney: ${
          newItem.fee
        }$\nCategory: ${categories[newItem.category]}`,
      });
    } else {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: "Error",
        textBody: "Please enter all information!!!",
      });
    }
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
          Add Expense
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddButton;
