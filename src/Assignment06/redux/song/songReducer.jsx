import { songTypes } from "./songTypes";

const initialState = { products: [] };

export const songReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case songTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case songTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case songTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
