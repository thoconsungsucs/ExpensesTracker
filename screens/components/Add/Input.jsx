import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { caculatorChange } from "../../redux/actions";
const Input = () => {
    const [text, setText] = useState();
    const dispatch = useDispatch();
    const handleChange = (value) => {
        setText(value);
        dispatch(caculatorChange("DESCRIPTION", value));
        console.log(value);
    }
  return (
    <TextInput
        placeholder="Chi tiết"
        className="mt-10 text-xl border-b-[1px]"
        value={text}
        onChangeText={handleChange}
      ></TextInput>
  )
}

export default Input