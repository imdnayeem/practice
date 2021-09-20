import { songTypes } from "./songTypes";

export const setProducts = (products) => {
  return {
    type: songTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: songTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: songTypes.REMOVE_SELECTED_PRODUCT,
  };
};
