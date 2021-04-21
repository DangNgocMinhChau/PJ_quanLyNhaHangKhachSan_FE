import { combineReducers } from "redux";
import product from "./product";
import data from "./data";
import restaurant from "./restaurant";

const appReducers = combineReducers({
  product,
  data,
  restaurant,
});

export default appReducers;
