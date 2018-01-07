import React from "react";
import { render } from "react-dom";

console.log("hello from JS");

const App = ({ more = "" }) => {
  return "Hello from React" + more;
};

render(
  <App more=". And Hello from React Prop!" />,
  document.getElementById("root")
);
