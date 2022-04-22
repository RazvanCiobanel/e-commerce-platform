import {
  FETCH_CATEGORY,
  RESET_CATEGORY,
} from "../Actions/types";

const initialState = {
  category: {
    name: "",
    products: [],
  },
};

export default function categoryReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case FETCH_CATEGORY:
      return {
        ...state,
        category: {
          ...state.category,
          name: action.payload.name,
          products: [...action.payload.products],
        },
      };
    case RESET_CATEGORY:
      return initialState;

    default:
      return state;
  }
}
