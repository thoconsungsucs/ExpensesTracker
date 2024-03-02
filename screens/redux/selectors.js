import { createSelector } from "reselect";

export const caculatorSelector = (state) => state.curItem.fee;

export const inputSelector = (state) => state.curItem.description;

export const categorySelector = (state) => state.curItem.category;

export const curItemSelector = (state) => state.curItem;

export const filterStatus = (state) => state.status;

export const moneySelector = (state) => state.money;

export const dataSelector = (state) => state.data;

export const expensesListSeclector = (state) => state.data.expensesList;

export const filterListSeclector = createSelector(
  filterStatus,
  expensesListSeclector,
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
          result[category].sum += parseFloat(item.fee);
        });
      });
      console.log(result);
      const sortedResult = categoryOrder
        .map((category) => result[category])
        .filter(Boolean);

      console.log(sortedResult);
      return sortedResult;
    }

    return list;
  }
);

export const savingSelector = (state) => state.data.saving;

export const monthListSelector = (state) => state.data.monthList;
