import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Caculator = () => {
  return (
    <View className="mt-10 flex flex-wrap flex-row justify-between ">
      <TouchableOpacity className="w-[60px] h-[60px] bg-slate-100 flex items-center justify-center rounded-full mb-5">
        <Text className="text-3xl font-light">1</Text>
      </TouchableOpacity>
      <TouchableOpacity className="w-[60px] h-[60px] bg-slate-100 flex items-center justify-center rounded-full mb-5">
        <Text className="text-3xl font-light">2</Text>
      </TouchableOpacity>
      <TouchableOpacity className="w-[60px] h-[60px] bg-slate-100 flex items-center justify-center rounded-full mb-5">
        <Text className="text-3xl font-light">3</Text>
      </TouchableOpacity>
      <TouchableOpacity className="w-[60px] h-[60px] bg-slate-100 flex items-center justify-center rounded-full mb-5">
        <Text className="text-3xl font-light">0</Text>
      </TouchableOpacity>
      <TouchableOpacity className="w-[60px] h-[60px] bg-slate-100 flex items-center justify-center rounded-full mb-5">
        <Text className="text-3xl font-light">4</Text>
      </TouchableOpacity>
      <TouchableOpacity className="w-[60px] h-[60px] bg-slate-100 flex items-center justify-center rounded-full mb-5">
        <Text className="text-3xl font-light">5</Text>
      </TouchableOpacity>
      <TouchableOpacity className="w-[60px] h-[60px] bg-slate-100 flex items-center justify-center rounded-full mb-5">
        <Text className="text-3xl font-light">6</Text>
      </TouchableOpacity>
      <TouchableOpacity className="w-[60px] h-[60px] bg-slate-100 flex items-center justify-center rounded-full mb-5">
        <Text className="text-3xl font-light">.</Text>
      </TouchableOpacity>
      <TouchableOpacity className="w-[60px] h-[60px] bg-slate-100 flex items-center justify-center rounded-full mb-5">
        <Text className="text-3xl font-light">7</Text>
      </TouchableOpacity>
      <TouchableOpacity className="w-[60px] h-[60px] bg-slate-100 flex items-center justify-center rounded-full mb-5">
        <Text className="text-3xl font-light">8</Text>
      </TouchableOpacity>
      <TouchableOpacity className="w-[60px] h-[60px] bg-slate-100 flex items-center justify-center rounded-full mb-5">
        <Text className="text-3xl font-light">9</Text>
      </TouchableOpacity>
      <TouchableOpacity className="w-[60px] h-[60px] bg-slate-100 flex items-center justify-center rounded-full mb-5">
        <Text className="text-3xl font-light">x</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Caculator