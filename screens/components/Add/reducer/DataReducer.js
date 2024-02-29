const initState = {
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
          hour: "12:05",
        },
        {
          category: "fixed",
          date: "28/02/2024",
          description: "Mạng",
          fee: "33",
          id: "56879fc8-d8cf-4851-bac3-536812403829",
          hour: "12:05",
        },
      ],
    },
  ],
  monthList: [],
  saving: 0,
};

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case `ADD_ITEM_MINUS_${action.type.split("_")[3]}`: {
      const updateList = state.expensesList.map((item) =>
        item.date === action.payload.date
          ? { ...item, list: [action.payload, ...item.list] }
          : item
      );

      const existDay = updateList.some(
        (item) => item.date === action.payload.date
      );

      if (!existDay)
        updateList.unshift({
          date: action.payload.date,
          list: [action.payload],
        });

      const updateMonthList = state.monthList.includes(
        action.payload.date.substring(3)
      )
        ? state.monthList
        : [action.payload.date.substring(3), ...state.monthList];

      return {
        ...state,
        expensesList: updateList,
        saving: state.saving - parseFloat(action.payload.fee),
        monthList: updateMonthList,
      };
    }

    case `ADD_ITEM_PLUS_${action.type.split("_")[3]}`: {
      //Add a new item to correct day to list
      const updateList = state.expensesList.map((item) =>
        item.date === action.payload.date
          ? { ...item, list: [action.payload, ...item.list] }
          : item
      );

      // Add month to monthList if not exist
      const updateMonthList = state.monthList.includes(
        action.payload.date.substring(3)
      )
        ? state.monthList
        : [action.payload.date.substring(3), ...state.monthList];

      return {
        ...state,
        expensesList: updateList,
        saving: state.saving + parseFloat(action.payload.fee),
        monthList: updateMonthList,
      };
    }

    case "DELETE_ITEM": {
      const updateList = state.expensesList
        .map((day) => {
          const newList = day.list.filter(
            (transaction) => transaction.id !== action.payload
          );
          return {
            date: day.date,
            list: newList,
          };
        })
        .filter((day) => day.list.length > 0);
      console.log(updateList);
      return {
        ...state,
        expensesList: updateList,
      };
    }

    default:
      return state;
  }
};

export default dataReducer;
