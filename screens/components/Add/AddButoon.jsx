import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const AddButoon = () => {
  return (
    <View
        className="w-fit bg-white mx-auto mt-4 rounded-3xl"
        style={{ elevation: 5 }}
      >
        <TouchableOpacity className="bg-orange-200 rounded-3xl flex items-center justify-center">
          <Text className="text-3xl p-4 text-white font-semibold px-11">
            Thêm chi tiêu
          </Text>
        </TouchableOpacity>
      </View>
  )
}

export default AddButoon