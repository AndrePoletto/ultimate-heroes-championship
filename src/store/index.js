import { createStore } from "redux";
import { Reducers } from "../reducers";

export const store = createStore(
  Reducers, window.__REDUX_DEVTOOLS_EXTENSION__()
);