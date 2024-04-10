import { View, Text, Switch } from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { useSelector, useDispatch } from "react-redux";
import {
  monthListSelector,
  filterStatusSelector,
  curMonthSelector,
  filterListSelector,
} from "../../redux/selectors";
import { changeCurMonth, filterItem } from "../../redux/actions";
const Top = () => {
  const dispatch = useDispatch();
  const list = useSelector(filterListSelector);
  const saving = list.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.sum;
  }, 0);
  const monthList = useSelector(monthListSelector);
  const [open, setOpen] = useState(false);
  const months = monthList.map((month) => ({
    label: month,
    value: month,
  }));

  const curMonth = useSelector(curMonthSelector);

  const [items, setItems] = useState(months);

  const status = useSelector(filterStatusSelector);
  const [isEnabled, setIsEnabled] = useState(status);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => {
      return !previousState;
    });
    dispatch(filterItem(!status));
  };

  const handleChangeMonth = (callback) => {
    const month = callback();
    console.log(month);
    dispatch(changeCurMonth(month));
  };

  return (
    <View className="flex-row mt-5 justify-between">
      {saving < 0 ? (
        <View className=" bg-red-700 rounded-2xl flex justify-center items-center p-3">
          <Text className="text-2xl text-white">Saving</Text>
          <Text className="text-2xl text-white">-${-saving}</Text>
        </View>
      ) : (
        <View className=" bg-[#00A86B] rounded-2xl flex justify-center items-center p-3">
          <Text className="text-2xl text-white">Saving</Text>
          <Text className="text-2xl text-white">${saving}</Text>
        </View>
      )}

      <View>
        <DropDownPicker
          containerStyle={{ width: 144 }}
          placeholder="Category"
          open={open}
          value={curMonth}
          items={items}
          setOpen={setOpen}
          setValue={handleChangeMonth}
          setItems={setItems}
        />
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={true ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

export default Top;
