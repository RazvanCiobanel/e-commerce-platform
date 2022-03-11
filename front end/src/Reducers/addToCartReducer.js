import {
  ADD_TO_CART,
  RESET_CART,
  ADD_FROM_PDP,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_FROM_CART,
} from "../Actions/types";

const initialState = {
  cart: {
    cartItems: [],
    total: 0,
    totalQuantity: 0,
  },
};

export default function addToCartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const index = state.cartItems?.findIndex(
        (el) => el.id === action.payload.id
      );
      const indexAttr = state.cart.cartItems?.findIndex(
        (el) => el.id === action.payload.id && el.attributes.length === 0
      );
      const indexSelAttr = state.cart.cartItems?.findIndex(
        (el) =>
          el.id === action.payload.id &&
          JSON.stringify(el.selectedAttr) ===
            JSON.stringify(action.payload.selectedAttr)
      );
      if (index === -1) {
        return {
          cart: {
            ...state.cart,
            cartItems: [
              ...state.cart.cartItems,
              {
                id: action.payload.id,
                name: action.payload.name,
                gallery: action.payload.gallery,
                attributes: action.payload.attributes,
                prices: action.payload.prices,
                brand: action.payload.brand,
                quantity: action.payload.quantity,
                selectedAttr: action.payload.selectedAttr,
                key: action.payload.key,
              },
            ],
            totalQuantity: state.cart.totalQuantity + 1,
          },
        };
      } else if (indexAttr !== -1) {
        return {
          cart: {
            ...state.cart,
            cartItems: state.cart.cartItems?.map((item, i) =>
              indexAttr === i
                ? { ...item, quantity: item.quantity + action.payload.quantity }
                : item
            ),
            totalQuantity: state.cart.totalQuantity + 1,
          },
        };
      } else if (indexSelAttr === -1) {
        return {
          cart: {
            ...state.cart,
            cartItems: [
              ...state.cart.cartItems,
              {
                id: action.payload.id,
                name: action.payload.name,
                gallery: action.payload.gallery,
                attributes: action.payload.attributes,
                prices: action.payload.prices,
                brand: action.payload.brand,
                quantity: action.payload.quantity,
                selectedAttr: action.payload.selectedAttr,
                key: action.payload.key,
              },
            ],
            totalQuantity: state.cart.totalQuantity + 1,
          },
        };
      } else if (indexSelAttr !== -1) {
        return {
          cart: {
            ...state.cart,
            cartItems: state.cart.cartItems?.map((item, i) =>
              indexSelAttr === i
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item
            ),
            totalQuantity: state.cart.totalQuantity + 1,
          },
        };
      }
      break;
    case ADD_FROM_PDP:
      const indexP = state.cart.cartItems?.findIndex(
        (el) => el.id === action.payload.id
      );
      const indexPAttr = state.cart.cartItems?.findIndex(
        (el) => el.id === action.payload.id && el.attributes.length === 0
      );
      const indexPSelAttr = state.cart.cartItems?.findIndex(
        (el) =>
          el.id === action.payload.id &&
          JSON.stringify(el.selectedAttr) ===
            JSON.stringify(action.payload.selectedAttr)
      );
      if (indexP === -1) {
        return {
          cart: {
            ...state.cart,
            cartItems: [
              ...state.cart.cartItems,
              {
                id: action.payload.id,
                name: action.payload.name,
                gallery: action.payload.gallery,
                attributes: action.payload.attributes,
                prices: action.payload.prices,
                brand: action.payload.brand,
                quantity: action.payload.quantity,
                selectedAttr: action.payload.selectedAttr,
                key: action.payload.key,
              },
            ],
            totalQuantity: state.cart.totalQuantity + 1,
          },
        };
      } else if (indexPAttr !== -1) {
        return {
          cart: {
            ...state.cart,
            cartItems: state.cart.cartItems?.map((item, i) =>
              indexPAttr === i
                ? { ...item, quantity: item.quantity + action.payload.quantity }
                : item
            ),
            totalQuantity: state.cart.totalQuantity + 1,
          },
        };
      } else if (indexPSelAttr === -1) {
        return {
          cart: {
            ...state.cart,
            cartItems: [
              ...state.cart.cartItems,
              {
                id: action.payload.id,
                name: action.payload.name,
                gallery: action.payload.gallery,
                attributes: action.payload.attributes,
                prices: action.payload.prices,
                brand: action.payload.brand,
                quantity: action.payload.quantity,
                selectedAttr: action.payload.selectedAttr,
                key: action.payload.key,
              },
            ],
            totalQuantity: state.cart.totalQuantity + 1,
          },
        };
      } else if (indexPSelAttr !== -1) {
        return {
          cart: {
            ...state.cart,
            cartItems: state.cart.cartItems?.map((item, i) =>
              indexPSelAttr === i
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item
            ),
            totalQuantity: state.cart.totalQuantity + 1,
          },
        };
      }
      break;
    case INCREASE_QUANTITY:
      const cartItemI = state.cart.cartItems?.find(
        (item, index) => index.toString().concat(item.id) === action.payload
      );
      if (cartItemI) {
        return {
          cart: {
            ...state.cart,
            cartItems: state.cart.cartItems?.map((item, index) =>
              index.toString().concat(item.id) === action.payload
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item
            ),
            totalQuantity: state.cart.totalQuantity + 1,
          },
        };
      }
      break;
    case DECREASE_QUANTITY:
      const cartItemD = state.cart.cartItems?.find(
        (item, index) => index.toString().concat(item.id) === action.payload
      );
      if (cartItemD) {
        return {
          cart: {
            ...state.cart,
            cartItems: state.cart.cartItems?.map((item, index) =>
              index.toString().concat(item.id) === action.payload
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                  }
                : item
            ),
            totalQuantity: state.cart.totalQuantity - 1,
          },
        };
      }
      break;
    case REMOVE_FROM_CART:
      let filteredCart = state.cart.cartItems?.filter(
        (item, index) => index.toString().concat(item.id) !== action.payload
      );
      return {
        cart: {
          ...state.cart,
          cartItems: [...filteredCart],
          totalQuantity: state.cart.totalQuantity - 1,
        },
      };
    case RESET_CART:
      return initialState;
    default:
      return state;
  }
}
