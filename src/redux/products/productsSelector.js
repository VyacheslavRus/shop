const getProductsSelector = (state) => state.products.items;

const errorProductsSelector = (state) => state.products.error;

const loaderProductsSelector = (state) => state.products.isLoading;

export { getProductsSelector, errorProductsSelector, loaderProductsSelector };
