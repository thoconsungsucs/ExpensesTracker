import { View, Text, Switch } from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { useSelector, useDispatch } from "react-redux";
import {
  monthListSelector,
  savingSelector,
  filterStatus,
} from "../../redux/selectors";
import { filterItem } from "../../redux/actions";
const Top = () => {
  const dispatch = useDispatch();
  const saving = useSelector(savingSelector);
  
  const monthList = useSelector(monthListSelector);
  const [open, setOpen] = useState(false);
  const months = monthList.map((month) => ({
    label: month,
    value: month,
  }));
  const value = monthList[0];
  const [items, setItems] = useState(months);
  
  const status = useSelector(filterStatus);
  const [isEnabled, setIsEnabled] = useState(status);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => {
      dispatch(filterItem(!previousState));
      return !previousState;
    });
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
          placeholder="Loại"
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={() => {}}
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
