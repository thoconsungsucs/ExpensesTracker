import { createSelector } from "reselect";

export const calculatorSelector = (state) => state.curItem.fee;

export const inputSelector = (state) => state.curItem.description;

export const categorySelector = (state) => state.curItem.category;

export const curItemSelector = (state) => state.curItem;

export const filterStatusSelector = (state) => state.status.isFiltered;

export const curMonthSelector = (state) => state.status.curMonth;

export const moneySelector = (state) => state.money;

export const dataSelector = (state) => state.data;

export const expensesListSelector = (state) => state.data.expensesList;

export const expensesListInMonthSelector = createSelector(
  expensesListSelector,
  curMonthSelector,
  (list, month) => {
    return list.filter((day) => day.date.substring(3) == month);
  }
);
export const filterListSelector = createSelector(
  filterStatusSelector,
  expensesListInMonthSelector,
  (bool, list) => {
    const categoryOrder = [
      "shopping",
      "food",
      "travel",
      "fixed",
      "income",
      "others",
    ];
    if (bool) {
      const result = {};
      list.forEach((entry) => {
        entry.list.forEach((item) => {
          const category = item.category;

          if (!result[category]) {
            result[category] = { category, list: [], sum: 0 };
          }

          result[category].list.push(item);
          console.log(item.fee);
          if (category == "income") {
            result[category].sum += parseFloat(item.fee);
          } else result[category].sum -= parseFloat(item.fee);
        });
      });
      const sortedResult = categoryOrder
        .map((category) => result[category])
        .filter(Boolean);

      return sortedResult;
    }

    return list;
  }
);

export const savingSelector = (state) => state.data.saving;

export const monthListSelector = (state) => state.data.monthList;
