import { FETCH_ALL } from "../Actions/types";

const initialState = {
  all: {
    name: "",
    products: [],
  },
};

export default function allReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        all: {
          ...state.all,
          name: action.payload.name,
          products: [...action.payload.products],
        },
      };
    default:
      return state;
  }
}
