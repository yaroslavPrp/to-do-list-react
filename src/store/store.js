import { createStore } from "redux";
import reducer from "./reducer";

const preloadedState = { name: "", toDoList: [] };

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(reducer, preloadedState, devTools);
