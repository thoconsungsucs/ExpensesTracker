const initState =
  // shopping: {
  //   lastItem: "",
  //   fee: 0,
  //   date: "",
  // },
  // food: {
  //   lastItem: "",
  //   fee: 0,
  //   date: "",
  // },
  // travel: {
  //   lastItem: "",
  //   fee: 0,
  //   date: "",
  // },
   false 

const statusReducer = (state = initState, action) => {
  switch (action.type) {
    // case `ADD_ITEM_${action.type.split("_")[2]}`: {
    //   return {
    //     ...state,
    //     [action.type.split("_")[2]]: {
    //       lastItem: action.payload.description,
    //       fee: action.payload.fee,
    //       date: action.payload.date,
    //     },
    //   };
    // }

    case "FILTER_ITEM":
      return action.payload;
    default:
      return state;
  }
};

export default statusReducer;
