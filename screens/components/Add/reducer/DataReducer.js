const initState = {
  expensesList: [],
  monthList: [],
  saving: 0,
};

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case `ADD_ITEM_${action.type.split("_")[2]}`: {
      const updateList = state.expensesList.map((item) =>
        item.date === action.payload.date
          ? {
              ...item,
              list: [action.payload, ...item.list],
              sum:
                action.payload.category === "income"
                  ? item.sum + parseFloat(action.payload.fee)
                  : item.sum - parseFloat(action.payload.fee),
            }
          : item
      );
      const existDay = updateList.some(
        (item) => item.date === action.payload.date
      );

      if (!existDay)
        updateList.unshift({
          date: action.payload.date,
          list: [action.payload],
          sum:
            action.payload.category === "income"
              ? +parseFloat(action.payload.fee)
              : -parseFloat(action.payload.fee),
        });

      const updateMonthList = state.monthList.includes(
        action.payload.date.substring(3)
      )
        ? state.monthList
        : [action.payload.date.substring(3), ...state.monthList];

      return action.payload.category === "income"
        ? {
            ...state,
            expensesList: updateList,
            saving: state.saving + parseFloat(action.payload.fee),
            monthList: updateMonthList,
          }
        : {
            ...state,
            expensesList: updateList,
            saving: state.saving - parseFloat(action.payload.fee),
            monthList: updateMonthList,
          };
    }

    case "DELETE_ITEM": {
      // const updateList = state.expensesList
      //   .map((day) => {
      //     const newList = day.list.filter(
      //       (transaction) => transaction.id !== action.payload.id
      //     );
      //     return {
      //       date: day.date,
      //       list: newList,
      //     };
      //   })
      //   .filter((day) => day.list.length > 0);

      const indexItemChanged = state.expensesList.findIndex(
        (day) => day.date === action.payload.date
      );

      let updateList = [...state.expensesList];
      const itemChanged = updateList[indexItemChanged];

      itemChanged.list = itemChanged.list.filter(
        (transaction) => transaction.id !== action.payload.id
      );

      itemChanged.sum =
        action.payload.category === "income"
          ? itemChanged.sum - parseFloat(action.payload.fee)
          : itemChanged.sum + parseFloat(action.payload.fee);

      updateList = updateList.filter((day) => day.list.length > 0);

      return action.payload.category === "income"
        ? {
            ...state,
            saving: state.saving - parseFloat(action.payload.fee),
            expensesList: updateList,
          }
        : {
            ...state,
            saving: state.saving + parseFloat(action.payload.fee),
            expensesList: updateList,
          };
    }

    default:
      return state;
  }
};

export default dataReducer;
