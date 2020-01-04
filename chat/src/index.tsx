import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import ChatApp from "./ChatApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <ChatApp />
  </Provider>,
  rootElement
);
