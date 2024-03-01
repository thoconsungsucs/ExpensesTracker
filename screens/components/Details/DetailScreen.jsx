import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { dataSelector } from "../../redux/selectors";
import DropDownPicker from "react-native-dropdown-picker";
import Item from "../Add/Item";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const DetailScreen = () => {
  const data = useSelector(dataSelector);
  const [open, setOpen] = useState(false);
  const value = data.monthList[0]; // Initial value for dropdown
  const months = data.monthList.map((month) => ({
    label: month,
    value: month,
  }));
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
  const icons = {
    shopping: () => <AntDesign name="shoppingcart" size={44} color="black" />,
    food: () => (
      <MaterialCommunityIcons name="noodles" size={44} color="black" />
    ),
    travel: () => (
      <MaterialCommunityIcons
        name="bus-articulated-front"
        size={44}
        color="black"
      />
    ),
    fixed: () => <MaterialIcons name="payment" size={44} color="black" />,
    income: () => <MaterialIcons name="money" size={44} color="black" />,
    others: () => (
      <FontAwesome6 name="money-bill-trend-up" size={24} color="black" />
    ),
  };
  const categories = {shopping: "Mua sắm", food: "Ăn uống", travel: "Đi lại", fixed: "Cố định", income: "Lương", others: "Chi phí phát sinh"}
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
            <View className="flex-row justify-between">
              <Text className="text-xl mb-3 font-semibold">{day.date}</Text>
              {day.sum < 0 ? (
                <Text className="text-xl mb-3 font-semibold text-red-500">
                  Tổng: -${-day.sum}
                </Text>
              ) : (
                <Text className="text-xl mb-3 font-semibold text-green-500">
                  Tổng: ${day.sum}
                </Text>
              )}
            </View>
            {day.list.map((item) => (
              <Item
                key={item.id}
                name={categories[item.category]}
                category={item.category}
                lastItem={item.description}
                fee={item.fee}
                date={item.date}
                hour={item.hour}
                id={item.id}
                icon={icons[item.category]}
              ></Item>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default DetailScreen;
