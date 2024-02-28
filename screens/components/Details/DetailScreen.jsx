import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { dataSelector } from "../../redux/selectors";
import DropDownPicker from "react-native-dropdown-picker";
import Item from "../Add/Item";
const DetailScreen = () => {
  const data = useSelector(dataSelector);
  const [open, setOpen] = useState(false);
  const value = data.monthList[0]; // Initial value for dropdown
  const months = data.monthList.map((month) => ({
    label: month,
    value: month,
  }));
  console.log(data.monthList);
  const [items, setItems] = useState(months);

  // const groupTransactionsByDate = (list) => {
  //   const groupedData = {};
  //   list.forEach((item) => {
  //     const date = item.date;
  //     if (!groupedData[date]) {
  //       groupedData[date] = [];
  //     }
  //     groupedData[date].push(item);
  //   });
  //   return groupedData;
  // };

  // const groupedData = groupTransactionsByDate(list.expensesList);
  // const outputArray = Object.entries(groupedData).map(([date, list]) => ({
  //   date,
  //   list,
  // }));

  const outputArray = data.expensesList;

  return (
    <View className="px-5 bg-white h-full">
      <View className="flex-row mt-5 justify-between">
        {data.saving < 0 ? (
          <View className=" bg-red-700 rounded-2xl flex justify-center items-center p-3">
            <Text className="text-2xl text-white">Saving</Text>
            <Text className="text-2xl text-white">-${-data.saving}</Text>
          </View>
        ) : (
          <View className=" bg-[#00A86B] rounded-2xl flex justify-center items-center p-3">
            <Text className="text-2xl text-white">Saving</Text>
            <Text className="text-2xl text-white">${data.saving}</Text>
          </View>
        )}
        

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
      </View>

      <ScrollView className="mt-7" showsVerticalScrollIndicator={false}>
        {outputArray.map((day) => (
          <View key={day.date}>
            <Text className="text-xl mb-3 font-semibold">{day.date}</Text>
            {day.list.map((item) => (
              <Item
                key={item.id}
                type={item.category}
                lastItem={item.description}
                fee={item.fee}
                date={item.date}
              ></Item>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default DetailScreen;
