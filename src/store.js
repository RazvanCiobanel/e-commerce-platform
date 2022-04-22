import {
  createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers";
import {
  persistStore,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {};

const middware = [thunk];

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["selectedCurr"],
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);

const store = createStore(
  persistedReducer,
  initialState,
  compose(applyMiddleware(...middware))
);
const persistor = persistStore(store);

export { store, persistor };
