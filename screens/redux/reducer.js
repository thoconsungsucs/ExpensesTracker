const initState = {
  money: {
    balance: 0,
    income: 0,
    expenses: 0,
  },
  status: {
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
  },
  list: {
    expensesList: [],
    monthList: [],
    saving: 0,
  },
  curItem: {
    fee: "18",
    category: "",
    description: "",
  },
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ITEM_PLUS":
      return {
        ...state,
        money: {
          ...state.money,
          balance: state.money.balance + action.payload,
          expenses: state.money.expenses + action.payload,
        },
      };
    case "CUR_ITEM_FEE_CHANGE":
        return {
       ...state,
          curItem: {
         ...state.curItem,
            fee: action.payload,
          },
        };
    case "CUR_ITEM_CATEGORY_CHANGE":
        return {
          ...state,
          curItem: {
            ...state.curItem,
            category: action.payload,
          },
        };
    default:
      return state;
  }
};

export default rootReducer;