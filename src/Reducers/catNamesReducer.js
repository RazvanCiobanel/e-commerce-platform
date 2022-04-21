import { FETCH_CATEGORIES } from "../Actions/types";
import allReducer from "./allReducer";


const initialState = {
  categories: [
      
  ],
};

export default function catNamesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      
      return {
    
        categories: [...state.categories, ...action.payload.categories],
      };
    default:
      return state;
  }
}
