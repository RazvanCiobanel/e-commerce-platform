import {
  PLP_SELECT_ITEM,
  SELECT_PLP_ATTRIBUTES,
  RESET_ITEM,
  PDP_SELECT_ITEM,
  SELECT_PDP_ATTRIBUTES,
} from "../Actions/types";
import selectPlpAttr from "../Utils/selectPlpAttrUtil";

const initialState = {
  selectedItem: {
    id: "",
    name: "",
    gallery: [],
    attributes: [],
    prices: [],
    brand: "",
    quantity: 1,
    selectedAttr: [],
  },
};

export default function selectedItemReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case PLP_SELECT_ITEM:
      return {
        ...state,
        selectedItem: {
          ...state.selectedItem,
          id: action.payload.id,
          name: action.payload.name,
          gallery: action.payload.gallery,
          attributes: action.payload.attributes,
          prices: action.payload.prices,
          brand: action.payload.brand,
          quantity: 1,
          selectedAttr: action.payload.selectedAttr,
        },
      };
    case SELECT_PLP_ATTRIBUTES:
      let f = selectPlpAttr(
        state.selectedItem.selectedAttr,
        action.payload
      );
      return {
        ...state,
        selectedItem: {
          ...state.selectedItem,
          selectedAttr: [...f],
        },
      };
    case PDP_SELECT_ITEM:
      return {
        ...state,
        selectedItem: {
          ...state.selectedItem,
          id: action.payload.id,
          name: action.payload.name,
          gallery: action.payload.gallery,
          attributes: action.payload.attributes,
          prices: action.payload.prices,
          brand: action.payload.brand,
          quantity: 1,
          selectedAttr: action.payload.selectedAttr,
        },
      };
    case SELECT_PDP_ATTRIBUTES:
      let g = selectPlpAttr(
        state.selectedItem.selectedAttr,
        action.payload
      );
      return {
        ...state,
        selectedItem: {
          ...state.selectedItem,
          selectedAttr: [...g],
        },
      };
    case RESET_ITEM:
      return initialState;
    default:
      return state;
  }
}
