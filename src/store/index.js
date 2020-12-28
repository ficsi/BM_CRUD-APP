import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import initReducers from "../reducers";

const STATE = {};

const middleware = [thunk];

const store = createStore(
  initReducers,
  STATE,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
