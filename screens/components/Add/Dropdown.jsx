import React from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculatorChange } from "../../redux/actions";
import { categorySelector } from "../../redux/selectors";

export const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Shopping", value: "shopping" },
    { label: "Food", value: "food" },
    { label: "Travel", value: "travel" },
    { label: "Fixed", value: "fixed" },
    { label: "Salary", value: "income" },
    { label: "Others", value: "others" },
  ]);
  const dispatch = useDispatch();
  const value = useSelector(categorySelector)
  const handleChange = (callback) => {
    const category = callback();
    dispatch(calculatorChange("CATEGORY", category));
  };
 
  return (
    <DropDownPicker
      containerStyle={{width: 176}}
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
