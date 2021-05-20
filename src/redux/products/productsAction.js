import { createAction } from "@reduxjs/toolkit";

export const getAllProducts = createAction("products/getAllProducts");
export const addProduct = createAction("products/addProduct");
export const deleteProduct = createAction("products/deleteProduct");
export const setProductLoading = createAction("products/setProductLoading");
export const setError = createAction("products/setError");
export const resetError = createAction("products/resetError");

// export const getAllProductsRequest = createAction('products/getAllProductsRequest');
// export const getAllProductsSuccess = createAction('products/getAllProductsSuccess');
// export const getAllProductsError = createAction('products/getAllProductsError');
// export const addProductRequest = createAction('products/addProductRequest');
// export const addProductSuccess = createAction('products/addProductSuccess');
// export const addProductError = createAction('products/addProductError');
// export const deleteProductRequest = createAction('products/deleteProductRequest');
// export const deleteProductSuccess = createAction('products/deleteProductSuccess');
// export const deleteProductError = createAction('products/deleteProductError');

// export const getAllProducts = (products) => {
//   return { type: "getAllProducts", payload:products };
// };

// export const addProduct = (car) => {
//   console.log(car);
//   return {
//     type: "addProduct",
//     payload: car,
//   };
// };

// export const deleteProduct = (id) => ({
//   type: "deleteProduct",
//   payload: id,
// });
