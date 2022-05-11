
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// core styles
import "./scss/volt.scss";

// vendor styles
import "react-datetime/css/react-datetime.css";

import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <HashRouter>
    <ScrollToTop />
    <HomePage />
  </HashRouter>,
  document.getElementById("root")
);
