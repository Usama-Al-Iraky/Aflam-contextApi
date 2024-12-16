import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { ContextApiComp } from "./components/ContextApi";
const root = document.getElementById("root");

ReactDOM.render(
  <ContextApiComp>
    <App />
  </ContextApiComp>,
  root
);
