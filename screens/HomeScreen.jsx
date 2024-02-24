import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Item from "./components/Item";

const Home = ( { navigation } ) => {
  return (
    <View className=" bg-white h-full pt-6">
      <View className="w-5/6  mx-auto h-1/5 flex items-center justify-center bg-red-400 rounded-3xl ">
        <Text className="text-2xl font-light mb-1">Số dư</Text>
        <Text className="text-3xl font-semibold">$0</Text>
      </View>

      <View className="w-5/6 mx-auto flex rounded-3xl mt-5 flex-row space-x-3 ">
        <View className="bg-green-200 flex-1 p-3 flex-row items-center rounded-2xl">
          <MaterialIcons name="money" size={48} color="black" />
          <View className="pl-3">
            <Text>Thu nhập</Text>
            <Text className="font-semibold text-xl">$0</Text>
          </View>
        </View>

        <View className="bg-yellow-100 flex-1 p-3 flex-row items-center rounded-2xl">
          <MaterialCommunityIcons
            name="emoticon-cry-outline"
            size={48}
            color="black"
          />
          <View className="pl-3">
            <Text>Chi tiêu</Text>
            <Text className="font-semibold text-xl">$0</Text>
          </View>
        </View>
      </View>

      <View className="w-5/6 mx-auto pt-6 flex-row">
        <Text className="flex-1 font-semibold text-lg">
          Chi tiêu trong tháng
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <Text className="text-base text-pink-500 mt-auto rounded-xl border py-1 px-2">
            Tất cả
          </Text>
        </TouchableOpacity>
      </View>

      <View className="w-5/6 mx-auto mt-4">
        <Item />
        <Item />
        <Item />
      </View>

      <TouchableOpacity className="mx-auto mt-3" onPress={() => navigation.navigate('Add')}>
        <AntDesign name="pluscircle" size={58} color="#EE60AC" />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
