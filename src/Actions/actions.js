import {
  FETCH_CURRENCIES,
  CHANGE_CURR,
  FETCH_ALL,
  ADD_TO_CART,
  RESET_CART,
  ADD_FROM_PDP,
  PLP_SELECT_ITEM,
  SELECT_PLP_ATTRIBUTES,
  RESET_ITEM,
  SELECT_PDP_ATTRIBUTES,
  PDP_SELECT_ITEM,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_FROM_CART,
  FETCH_CATEGORY,
  RESET_CATEGORY,
  FETCH_NAMES,
} from "./types";
import { client } from "..";
import {
  GET_CURRENCY_QUERY,
  GET_CATEGORY_QUERY,
  GET_NAMES_QUERY,
} from "../GraphQl/Queries";
import { ALL_VAR } from "../GraphQl/Variables";

export const getAll = () => async (dispatch) => {
  const all = await client.query({
    query: GET_CATEGORY_QUERY,
    variables: ALL_VAR,
    fetchPolicy: "no-cache",
  });
  dispatch({
    type: FETCH_ALL,
    payload: {
      ...all.data.category,
      name: all.data.category.name,
      products: [...all.data.category.products],
    },
  });
};

export const getCurrencies = () => async (dispatch) => {
  const currencies = await client.query({
    query: GET_CURRENCY_QUERY,
    fetchPolicy: "no-cache",
  });
  dispatch({
    type: FETCH_CURRENCIES,
    payload: currencies.data.currencies,
  });
};

export const changeCurr = (e) => {
  return {
    type: CHANGE_CURR,
    payload: e.target.value,
  };
};

export const addToCart = (e, item) => {
  e.preventDefault();
  return {
    type: ADD_TO_CART,
    payload: {
      id: item?.id,
      name: item?.name,
      gallery: item?.gallery,
      attributes: item?.attributes,
      prices: item?.prices,
      brand: item?.brand,
      quantity: item?.quantity,
      selectedAttr: item?.selectedAttr,
    },
  };
};

export const resetCart = () => {
  return {
    type: RESET_CART,
  };
};

export const addToCartPdp = (item) => {
  return {
    type: ADD_FROM_PDP,
    payload: {
      id: item?.id,
      name: item?.name,
      gallery: item?.gallery,
      attributes: item?.attributes,
      prices: item?.prices,
      brand: item?.brand,
      quantity: item?.quantity,
      selectedAttr: item?.selectedAttr,
    },
  };
};

export const chooseItem = (e, item) => {
  if (item) {
    e.preventDefault();

    return {
      type: PLP_SELECT_ITEM,
      payload: {
        id: item?.id,
        name: item?.name,
        gallery: item?.gallery,
        attributes: item?.attributes,
        prices: item?.prices,
        brand: item?.brand,
        quantity: 1,
        selectedAttr: [],
      },
    };
  }
};

export const choosePlpAttr = (e) => {
  e.preventDefault();
  return {
    type: SELECT_PLP_ATTRIBUTES,
    payload: e.target.id,
  };
};

export const resetItem = () => {
  return {
    type: RESET_ITEM,
  };
};

export const choosePdpItem = (item) => {
  if (item) {
    return {
      type: PDP_SELECT_ITEM,
      payload: {
        id: item?.id,
        name: item?.name,
        gallery: item?.gallery,
        attributes: item?.attributes,
        prices: item?.prices,
        brand: item?.brand,
        quantity: 1,
        selectedAttr: [],
      },
    };
  }
};

export const choosePdpAttr = (e) => {
  return {
    type: SELECT_PDP_ATTRIBUTES,
    payload: e.target.id,
  };
};
export const increaseQuantity = (e) => {
  return {
    type: INCREASE_QUANTITY,
    payload: e.target.id,
  };
};

export const decreaseQuantity = (e) => {
  return {
    type: DECREASE_QUANTITY,
    payload: e.target.id,
  };
};

export const removeFromCart = (e) => {
  return {
    type: REMOVE_FROM_CART,
    payload: e.target.id,
  };
};

export const getCategory = (id) => async (dispatch) => {
  const category = await client.query({
    query: GET_CATEGORY_QUERY,
    variables: {
      input: {
        title: id,
      },
    },
    fetchPolicy: "no-cache",
  });
  dispatch({
    type: FETCH_CATEGORY,
    payload: {
      name: category.data.category.name,
      products: [...category.data.category.products],
    },
  });
};

export const resetCategory = () => {
  return {
    type: RESET_CATEGORY,
  };
};

export const getCatNames = () => async (dispatch) => {
  const names = await client.query({
    query: GET_NAMES_QUERY,
    fetchPolicy: "no-cache",
  });

  dispatch({
    type: FETCH_NAMES,
    payload: {
      names: [...names.data.categories],
    },
  });
};
