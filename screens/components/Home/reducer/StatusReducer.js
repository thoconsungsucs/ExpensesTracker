const initState = {
  isFiltered: false,
  curMonth: new Date()
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .substring(3),
  saving: 0,
};

const statusReducer = (state = initState, action) => {
  switch (action.type) {
    case "FILTER_ITEM":
      return { ...state, isFiltered: action.payload };
    case "CHANGE_CUR_MONTH":
      return { ...state, curMonth: action.payload };
    case "CHANGE_SAVING_MONTH":
      return { ...state, saving: action.payload };
    default:
      return state;
  }
};

export default statusReducer;
