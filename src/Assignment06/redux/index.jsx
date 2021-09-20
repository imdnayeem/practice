import { combineReducers } from "redux";
import { songReducer, selectedProductReducer } from "./song/songReducer";

const reducers = combineReducers({
  allProducts: songReducer,
  product: selectedProductReducer,
});

export default reducers;
