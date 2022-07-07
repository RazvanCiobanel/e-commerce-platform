import { createSelector } from "reselect";

export const getCart = (state) => state.cart.cart.cartItems;
export const getSelectedCurr = (state) =>
  state.selectedCurr.selectedCurr;

export const totalSelector = createSelector(
  [getCart, getSelectedCurr],
  (cartItems, selectedCurr) => {
    if (cartItems) {
      let arr = [...cartItems];
      let str = selectedCurr;
      let total = 0;
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].prices?.length; j++) {
          if (str === arr[i].prices[j].currency.label) {
            total +=
              arr[i].quantity * arr[i].prices[j].amount;
          }
        }
      }
      return Number(
        Math.round(total + "e2") + "e-2"
      ).toFixed(2);
    } else {
      return 0;
    }
  }
);
