import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import {
  filterListSelector,
} from "../../redux/selectors";
import Item from "../Add/Item";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const List = () => {
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
  const categories = {
    shopping: "Shopping",
    food: "Food",
    travel: "Travel",
    fixed: "Fixed",
    income: "Salary",
    others: "Others",
  };
  const list = useSelector(filterListSelector);
  return (
    <ScrollView className="mt-7" showsVerticalScrollIndicator={false}>
      {list.map((day) => (
        <View key={day.date || day.category}>
          <View className="flex-row justify-between">
            <Text className="text-xl mb-3 font-semibold">
              {day.date || categories[day.category]}
            </Text>
            {day.sum < 0 ? (
              <Text className="text-xl mb-3 font-semibold text-red-500">
                Sum: ${-day.sum}
              </Text>
            ) : (
              <Text className="text-xl mb-3 font-semibold text-green-500">
                Sum: ${day.sum}
              </Text>
            )}
          </View>
          {day.list.map((item) => {
            return (
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
            );
          })}
        </View>
      ))}
    </ScrollView>
  );
};

export default List;
