import React from "react";
import { createRoot } from "react-dom/client";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";

import App from "./App";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
