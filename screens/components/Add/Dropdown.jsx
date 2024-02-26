import { View, Text } from "react-native";
import React from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { caculatorChange } from "../../redux/actions";

export const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Mua sắm", value: "shopping" },
    { label: "Ăn uống", value: "food" },
    { label: "Đi lại", value: "travel" },
    { label: "Cố định", value: "fixed" },
    { label: "Lương", value: "income" },
    { label: "Chi phí phát sinh", value: "others" },
  ]);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    setValue(value);
    dispatch(caculatorChange("CATEGORY", value));
  };

  return (
    <DropDownPicker
      className="w-44 mx-auto"
      placeholder="Loại"
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={handleChange}
      setItems={setItems}
    />
  );
};
