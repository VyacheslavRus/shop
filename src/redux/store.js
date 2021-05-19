import { combineReducers } from "redux";
import clientsReducer from "./clients/clientsReducer";
import productsReducer from "./products/productsReducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "./auth/authReducers";

const rootReducer = combineReducers({
  products: productsReducer,
  clients: clientsReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()],
});

export default store;
