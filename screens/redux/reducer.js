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
  data: {
    expensesList: [
      {
        date: "28/02/2024",
        list: [
          {
            category: "shopping",
            date: "28/02/2024",
            description: "Quần áo",
            fee: "11",
            id: "882b8e00-81f1-4ff7-b729-a5ac2872bb54",
          },
          {
            category: "fixed",
            date: "28/02/2024",
            description: "Mạng",
            fee: "33",
            id: "56879fc8-d8cf-4851-bac3-536812403829",
          },
        ],
      },
      {
        date: "29/02/2024",
        list: [
          {
            category: "travel",
            date: "29/02/2024",
            description: "Xe bus",
            fee: "333",
            id: "ca662f13-5174-439d-9da6-b4433b39e1fb",
          },
          {
            category: "fixed",
            date: "29/02/2024",
            description: "Bảo hiểm",
            fee: "333",
            id: "24f6e824-a0c7-4bc3-be82-5b2748f305c9",
          },
        ],
      },

      {
        date: "03/02/2024",
        list: [
          {
            category: "food",
            date: "03/02/2024",
            description: "Bánh mì",
            fee: "333",
            id: "5d93e9e5-1a66-488d-b28b-bbf489e84f82",
          },
          {
            category: "shopping",
            date: "03/02/2024",
            description: "Quần",
            fee: "10",
            id: "882b8e00-81f1-4ff7-b729-a5ac2872bb54",
          },
          {
            category: "fixed",
            date: "03/02/2024",
            description: "Tiền học",
            fee: "33",
            id: "56879fc8-d8cf-4851-bac3-536812403829",
          },
        ],
      },
      {
        date: "04/02/2024",
        list: [
          {
            category: "travel",
            date: "04/02/2024",
            description: "Bee",
            fee: "333",
            id: "ca662f13-5174-439d-9da6-b4433b39e1fb",
          },
          {
            category: "fixed",
            date: "04/02/2024",
            description: "",
            fee: "333",
            id: "24f6e824-a0c7-4bc3-be82-5b2748f305c9",
          },
          {
            category: "food",
            date: "04/02/2024",
            description: "",
            fee: "333",
            id: "5d93e9e5-1a66-488d-b28b-bbf489e84f82",
          },
        ],
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
    case `ADD_ITEM_MINUS_${action.type.split("_")[3]}`: {
      const updateList = state.data.expensesList.map((item) =>
        item.date === action.payload.date
          ? { ...item, list: [action.payload, ...item.list] }
          : item
      );
      const updateMonthList = state.data.monthList.includes(
        action.payload.date.substring(3)
      )
        ? state.data.monthList
        : [action.payload.date.substring(3), ...state.data.monthList];
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
        data: {
          ...state.data,
          expensesList: updateList,
          saving: state.data.saving - action.payload.fee,
          monthList: updateMonthList,
        },
        curItem: {
          id: "",
          fee: "",
          category: "",
          description: "",
        },
      };
    }
    case `ADD_ITEM_PLUS_${action.type.split("_")[3]}`:
      const updateList = state.data.expensesList.map((item) =>
        item.date === action.payload.date
          ? { ...item, list: [action.payload, ...item.list] }
          : item
      );
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
          ...state.data,
          expensesList: updateList,
          saving: state.data.saving - action.payload.fee,
          monthList: updateMonthList,
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
