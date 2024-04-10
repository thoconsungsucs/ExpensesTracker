import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Item from "../Add/Item";
import { useDispatch, useSelector } from "react-redux";
import {
  moneySelector,
  expensesListSelector,
  monthListSelector,
} from "../../redux/selectors";
import { changeCurMonth } from "../../redux/actions";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const monthList = useSelector(monthListSelector);
  const curMonth = new Date()
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .substring(3);

  if (!monthList.includes(curMonth)) {
    dispatch(changeCurMonth(curMonth));
  }

  const expensesList = useSelector(expensesListSelector);

  const getStatus = (expensesList) => {
    const status = {};
    expensesList.forEach((month) => {
      month.list.forEach((transaction) => {
        const { category } = transaction;

        // Chỉ quan tâm đến danh mục "shopping", "food", và "travel"
        if (["shopping", "food", "travel"].includes(category)) {
          if (!(category in status)) {
            status[category] = transaction;
          }
        }
      });
    });
    return status;
  };

  const status = getStatus(expensesList);

  const shopping = status.shopping;
  const food = status.food;
  const travel = status.travel;
  const money = useSelector(moneySelector);

  return (
    <View className=" bg-white h-full pt-6">
      {/* Balance */}
      <View
        className="w-5/6  mx-auto h-1/5 flex items-center justify-center bg-red-400 rounded-3xl"
        style={{ elevation: 5 }}
      >
        <Text className="text-2xl font-light mb-1">Balance</Text>
        <Text className="text-3xl font-semibold">${money.balance}</Text>
      </View>

      {/* Income and expense */}
      <View className="w-5/6 mx-auto flex rounded-3xl mt-5 flex-row space-x-3 ">
        <View
          className="bg-green-200 flex-1 p-3 flex-row items-center rounded-2xl"
          style={{ elevation: 5 }}
        >
          <MaterialIcons name="money" size={48} color="black" />
          <View className="pl-3">
            <Text>Income</Text>
            <Text className="font-semibold text-xl">${money.income}</Text>
          </View>
        </View>

        <View
          className="bg-yellow-100 flex-1 p-3 flex-row items-center rounded-2xl"
          style={{ elevation: 5 }}
        >
          <MaterialCommunityIcons
            name="emoticon-cry-outline"
            size={48}
            color="black"
          />
          <View className="pl-3">
            <Text>Expenses</Text>
            <Text className="font-semibold text-xl">${money.expenses}</Text>
          </View>
        </View>
      </View>

      {/* Navigation to Details */}
      <View className="w-5/6 mx-auto pt-6 flex-row">
        <Text className="flex-1 font-semibold text-lg">
          Current Month Expenses
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Details")}>
          <Text className="text-base text-pink-500 mt-auto rounded-xl border py-1 px-2">
            All
          </Text>
        </TouchableOpacity>
      </View>

      {/* CurList */}
      <View className="w-5/6 mx-auto mt-4">
        <Item
          name={"Shopping"}
          category={"Shopping"}
          lastItem={shopping?.description}
          fee={shopping?.fee}
          hour={shopping?.date.substring(0,5)}
          icon={() => <AntDesign name="shoppingcart" size={44} color="black" />}
        />

        <Item
          name={"Food"}
          category={"Food"}
          lastItem={food?.description}
          fee={food?.fee}
          hour={food?.date.substring(0,5)}
          icon={() => (
            <MaterialCommunityIcons name="noodles" size={44} color="black" />
          )}
        />
        <Item
          name={"Travel"}
          category={"Travel"}
          lastItem={travel?.description}
          fee={travel?.fee}
          hour={travel?.date.substring(0,5)}
          icon={() => (
            <MaterialCommunityIcons
              name="bus-articulated-front"
              size={44}
              color="black"
            />
          )}
        />
      </View>

      {/* AddButton */}
      <View
        className="w-[58px] rounded-full bg-white mx-auto mt-2"
        style={{ elevation: 12 }}
      >
        <TouchableOpacity
          className=""
          onPress={() => navigation.navigate("Add")}
          style={{ elevation: 1 }}
        >
          <AntDesign name="pluscircle" size={58} color="#EE60AC" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
