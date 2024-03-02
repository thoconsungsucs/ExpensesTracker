export const caculatorChange = (type, value) => {
  return {
    type: `CUR_ITEM_${type}_CHANGE`,
    payload: value,
  };
};

export const addItem = (type,value) => {
  return {
    type: `ADD_ITEM_${type}`,
    payload: value,
  };
};

export const deleteItem = (value) => {
  return {
    type: "DELETE_ITEM",
    payload: value
  }
}

export const filterItem = (value) => {
  return {
    type: "FILTER_ITEM",
    payload: value,
  };
}
