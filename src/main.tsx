import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./assets/scss/index.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
