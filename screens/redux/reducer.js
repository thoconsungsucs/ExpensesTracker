
import { combineReducers } from "redux";
import moneyReducer from "../components/Home/reducer/MoneyReducer";
import statusReducer from "../components/Home/reducer/StatusReducer";
import dataReducer from "../components/Add/reducer/DataReducer";
import curItemReducer from "../components/Add/reducer/CurItemReducer";

const rootReducer = combineReducers({
  money: moneyReducer,
  status: statusReducer,
  data : dataReducer,
  curItem: curItemReducer,
});

export default rootReducer;
