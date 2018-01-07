import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import App from "./app";

const Root = () => {
  return (
    <Provider store={store}>
      <App more=". And Hello from React Prop!" />
    </Provider>
  );
};

export default Root;
