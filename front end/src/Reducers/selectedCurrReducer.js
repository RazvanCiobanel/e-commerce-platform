import { CHANGE_CURR } from "../Actions/types";

const initialState = {
  selectedCurr: "USD",
};

export default function selectedCurrReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CURR:
      return {
        ...state,
        selectedCurr: action.payload,
      };
    default:
      return state;
  }
}
