const initState = {
  balance: 0,
  income: 0,
  expenses: 0,
};

const moneyReducer = (state = initState, action) => {
  switch (action.type) {
    case `ADD_ITEM_MINUS_${action.type.split("_")[3]}`:
      return {
        ...state,
        balance: state.balance - parseFloat(action.payload.fee),
        expenses: state.expenses + parseFloat(action.payload.fee),
      };

    case `ADD_ITEM_PLUS_${action.type.split("_")[3]}`:
      return {
        ...state,
        income: state.income + parseFloat(action.payload.fee),
      };
      
    default:
      return state;
  }
};

export default moneyReducer;
