import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

import Layout from "./layout/Layout.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>,
  document.getElementById("root")
);
