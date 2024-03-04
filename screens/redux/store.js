import { createStore } from "redux";
import rootReducer from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

export const persistor = persistStore(store);

export default store;
