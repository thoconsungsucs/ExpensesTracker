export const caculatorSelector = (state) => state.curItem.fee;

export const inputSelector = (state) => state.curItem.description;

export const categorySelector = (state) => state.curItem.category;

export const curItemSelector = (state) => state.curItem;

// export const statusSelector = (state) => {
//   const status = {};
//   state.data.expensesList.forEach((month) => {
//     month.list.forEach((transaction) => {
//       const { category } = transaction;

//       // Chỉ quan tâm đến danh mục "shopping", "food", và "travel"
//       if (["shopping", "food", "travel"].includes(category)) {
//         if (!(category in status)) {
//           status[category] = transaction;
//         }
//       }
//     });
//   });
//   return status;
// };

export const moneySelector = (state) => state.money;

export const dataSelector = (state) => state.data;

export const expensesListSeclector = (state) => state.data.expensesList;
