const initState = {
  fee: "",
  category: "",
  description: "",
};
const curItemReducer = (state = initState, action) => {
  switch (action.type) {
    case "CUR_ITEM_FEE_CHANGE":
      return {
        ...state,
        fee: action.payload,
      };
    case "CUR_ITEM_CATEGORY_CHANGE":
      return {
        ...state,
        category: action.payload,
      };
    case "CUR_ITEM_DESCRIPTION_CHANGE":
      return {
        ...state,
        description: action.payload,
      };
    case `ADD_ITEM_MINUS_${action.type.split("_")[3]}`:
      return {
        fee: "",
        category: "",
        description: "",
      };
    case `ADD_ITEM_PLUS_${action.type.split("_")[3]}`:
      return {
        fee: "",
        category: "",
        description: "",
      };
      default:
        return state;
  }
};

export default curItemReducer;
