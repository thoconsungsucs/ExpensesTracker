import { View } from "react-native";
import React from "react";

import Top from "./Top";
import List from "./List";
const DetailScreen = () => {
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

  return (
    <View className="px-5 bg-white h-full">
      <Top />

      <List />
    </View>
  );
};

export default DetailScreen;
