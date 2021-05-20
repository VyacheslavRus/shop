import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  resetError,
  setError,
  setProductLoading,
} from "./productsAction";

const itemsProductsReducer = createReducer([], {
  [getAllProducts]: (_, { payload }) => payload,
  [addProduct]: (state, { payload }) => [...state, payload],
  [deleteProduct]: (state, { payload }) => [
    ...state.filter((product) => product.id !== payload),
  ],
});

const productsLoaderReducer = createReducer(false, {
  [setProductLoading]: (state) => !state,
});

const productsErrorReducer = createReducer(false, {
  [setError]: (_, { payload }) => payload,
  [resetError]: () => "",
});

const productsReducer = combineReducers({
  items: itemsProductsReducer,
  isLoading: productsLoaderReducer,
  error: productsErrorReducer,
});

export default productsReducer;

// const productsReducer = (state = [], action) => {
//   switch (action.type) {
//     case "addProduct":
//       return [...state, action.payload];
//     case "deleteProduct":
//       return [...state.filter((product) => product.id !== action.payload)];
//     case "getProducts":
//       return action.payload;

//     default:
//       return state;
//   }
// };

// export default productsReducer;
