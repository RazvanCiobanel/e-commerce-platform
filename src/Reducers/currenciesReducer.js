import { FETCH_CURRENCIES } from "../Actions/types";

const initialState = {
  currencies: [],
};

export default function currenciesReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case FETCH_CURRENCIES:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}
