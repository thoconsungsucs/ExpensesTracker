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
    fee: "",
    category: "",
    description: "",
  },
};

const rootReducer = (state = initState, action) => {
  console.log(action.type);
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
    case "CUR_ITEM_DESCRIPTION_CHANGE":
      return {
        ...state,
        curItem: {
          ...state.curItem,
          description: action.payload,
        },
      };
    case `ADD_ITEM_MINUS_${action.type.split("_")[3]}`:
      console.log(action.payload);
      return {
        ...state,
        money: {
          ...state.money,
          balance: state.money.balance - parseFloat(action.payload.fee),
          expenses: state.money.expenses + parseFloat(action.payload.fee),
        },
        // status: {
        //   ...state.status,
        //   [action.type.split("_")[3]]: {
        //     lastItem: action.payload.description,
        //     fee: action.payload.fee,
        //     date: "",
        //   },
        // },
        // list: {
        //   ...state.list,
        //   expensesList: [...state.expensesList, action.payload],
        //   saving: state.list.saving - action.payload.fee,
        // },
        curItem: {
          fee: "",
          category: "",
          description: "",
        },
      };
      case "DELETE": {
        return {
          ...state,
          curItem: {
            fee: "",
            category: "",
            description: "",
          }
        }
      }
    default:
      return state;
  }
};

export default rootReducer;
