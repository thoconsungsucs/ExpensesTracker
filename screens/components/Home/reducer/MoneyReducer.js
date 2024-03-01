const initState = {
  balance: 0,
  income: 0,
  expenses: 0,
};

const moneyReducer = (state = initState, action) => {
  switch (action.type) {
    case `ADD_ITEM_${action.type.split("_")[2]}`:
      return action.payload.category === "income"
        ? {
            ...state,
            income: state.income + parseFloat(action.payload.fee),
            balance: state.balance + parseFloat(action.payload.fee),
          }
        : {
            ...state,
            balance: state.balance - parseFloat(action.payload.fee),
            expenses: state.expenses + parseFloat(action.payload.fee),
          };

    case "DELETE_ITEM":
      return action.payload.category === "income"
        ? {
            ...state,
            income: state.income - parseFloat(action.payload.fee),
            balance: state.balance - parseFloat(action.payload.fee),
          }
        : {
            ...state,
            balance: state.balance + parseFloat(action.payload.fee),
            expenses: state.expenses - parseFloat(action.payload.fee),
          };
    default:
      return state;
  }
};

export default moneyReducer;
