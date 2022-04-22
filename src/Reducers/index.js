import { combineReducers } from "redux";
import currenciesReducer from "./currenciesReducer";
import selectedCurrReducer from "./selectedCurrReducer";
import allReducer from "./allReducer";
import addToCartReducer from "./addToCartReducer";
import selectedItemReducer from "./selectedItemReducer";
import categoryReducer from "./categoryReducer";
import catNamesReducer from "./catNamesReducer";

export default combineReducers({
  all: allReducer,
  currencies: currenciesReducer,
  selectedCurr: selectedCurrReducer,
  cart: addToCartReducer,
  selectedItem: selectedItemReducer,
  category: categoryReducer,
  names: catNamesReducer,
});
