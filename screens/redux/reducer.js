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
    expensesList: [
      {
        category: "shopping",
        date: "28/2/2024",
        description: "",
        fee: "",
        id: "882b8e00-81f1-4ff7-b729-a5ac2872bb54",
      },
      {
        category: "fixed",
        date: "28/2/2024",
        description: "",
        fee: "33",
        id: "56879fc8-d8cf-4851-bac3-536812403829",
      },
      {
        category: "travel",
        date: "29/2/2024",
        description: "",
        fee: "333",
        id: "ca662f13-5174-439d-9da6-b4433b39e1fb",
      },
      {
        category: "fixed",
        date: "29/2/2024",
        description: "",
        fee: "333",
        id: "24f6e824-a0c7-4bc3-be82-5b2748f305c9",
      },
      {
        category: "food",
        date: "30/3/2024",
        description: "",
        fee: "333",
        id: "5d93e9e5-1a66-488d-b28b-bbf489e84f82",
      },
      {
        category: "shopping",
        date: "30/3/2024",
        description: "",
        fee: "",
        id: "882b8e00-81f1-4ff7-b729-a5ac2872bb54",
      },
      {
        category: "fixed",
        date: "30/3/2024",
        description: "",
        fee: "33",
        id: "56879fc8-d8cf-4851-bac3-536812403829",
      },
      {
        category: "travel",
        date: "1/3/2024",
        description: "",
        fee: "333",
        id: "ca662f13-5174-439d-9da6-b4433b39e1fb",
      },
      {
        category: "fixed",
        date: "3/3/2024",
        description: "",
        fee: "333",
        id: "24f6e824-a0c7-4bc3-be82-5b2748f305c9",
      },
      {
        category: "food",
        date: "4/3/2024",
        description: "",
        fee: "333",
        id: "5d93e9e5-1a66-488d-b28b-bbf489e84f82",
      },
    ],
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
      return {
        ...state,
        money: {
          ...state.money,
          balance: state.money.balance - parseFloat(action.payload.fee),
          expenses: state.money.expenses + parseFloat(action.payload.fee),
        },
        status: {
          ...state.status,
          [action.type.split("_")[3]]: {
            lastItem: action.payload.description,
            fee: action.payload.fee,
            date: action.payload.date,
          },
        },
        list: {
          ...state.list,
          expensesList: [...state.list.expensesList, action.payload],
          saving: state.list.saving - action.payload.fee,
        },
        curItem: {
          id: "",
          fee: "",
          category: "",
          description: "",
        },
      };
    case `ADD_ITEM_PLUS_${action.type.split("_")[3]}`:
      return {
        ...state,
        money: {
          ...state.money,
          income: state.money.income + parseFloat(action.payload.fee),
        },
        status: {
          ...state.status,
          [action.type.split("_")[3]]: {
            lastItem: action.payload.description,
            fee: action.payload.fee,
            date: action.payload.date,
          },
        },
        list: {
          ...state.list,
          expensesList: [...state.list.expensesList, action.payload],
          saving: state.list.saving - action.payload.fee,
        },
        curItem: {
          id: "",
          fee: "",
          category: "",
          description: "",
        },
      };

    default:
      return state;
  }
};

export default rootReducer;
