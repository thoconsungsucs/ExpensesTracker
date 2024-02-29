const initState = {
  shopping: {
    lastItem: "",
    fee: 0,
    date: "",
  },
  food: {
    lastItem: "",
    fee: 0,
    date: "",
  },
  travel: {
    lastItem: "",
    fee: 0,
    date: "",
  },
};

const statusReducer = (state = initState, action) => {
  switch (action.type) {
    case `ADD_ITEM_MINUS_${action.type.split("_")[3]}`: {
      return {
        ...state,
        [action.type.split("_")[3]]: {
          lastItem: action.payload.description,
          fee: action.payload.fee,
          date: action.payload.date,
        },
      };
    }

    case `ADD_ITEM_PLUS_${action.type.split("_")[3]}`: {
      return {
        ...state,
        [action.type.split("_")[3]]: {
          lastItem: action.payload.description,
          fee: action.payload.fee,
          date: action.payload.date,
        },
      };
    }
    default:
      return state;
  }
};

export default statusReducer;
