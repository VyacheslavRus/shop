import axios from "axios";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  setError,
  setProductLoading,
} from "./productsAction";
import { getProductsSelector } from "./productsSelector";

export const addAllProductsOperation = () => async (dispatch, getState) => {
  const products = getProductsSelector(getState());
  if (products.some((item) => item.name.includes(products.name))) {
    dispatch(setError("Client xxxyyyy already exist"));
  }
  dispatch(setProductLoading());
  try {
    const { data } = await axios.get(
      `https://shop-a2177-default-rtdb.firebaseio.com/cars.json`
    );
    if (data) {
      const cars = Object.keys(data).map((key) => ({
        ...data[key],
        id: key,
      }));
      dispatch(getAllProducts(cars));
      // this.setState({ autoCars: cars });
    } else return;
  } catch (error) {
  } finally {
    dispatch(setProductLoading());
  }
};

export const addProductOperation = (car) => async (dispatch, getState) => {
  const products = getProductsSelector(getState());
  if (products.some((item) => item.name.includes(products.name))) {
    dispatch(setError("Client xxxyyyy already exist"));
  }
  dispatch(setProductLoading());
  try {
    const { data } = await axios.post(
      `https://shop-a2177-default-rtdb.firebaseio.com/cars.json`,
      car
    );
    dispatch(addProduct({ ...car, id: data.name }));
  } catch (error) {
  } finally {
    dispatch(setProductLoading());
  }
};

export const deleteProductOperations = (id) => async (dispatch, getState) => {
  const products = getProductsSelector(getState());
  if (products.some((item) => item.name.includes(products.name))) {
    dispatch(setError("Client xxxyyyyxxx already exist"));
  }
  dispatch(setProductLoading());
  try {
    await axios.delete(
      `https://shop-a2177-default-rtdb.firebaseio.com/cars/${id}.json`
    );
    dispatch(deleteProduct(id));
  } catch (error) {
  } finally {
    dispatch(setProductLoading());
  }
};
