import { FETCH_NAMES } from "../Actions/types";

const initialState = {
  names: [],
};

export default function catNamesReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case FETCH_NAMES:
      return {
        names: [...action.payload.names],
      };
    default:
      return state;
  }
}
