import { combineReducers } from "redux";
import product from "./product";
import data from "./data";

const appReducers = combineReducers({
  product,
  data,
});

export default appReducers;
