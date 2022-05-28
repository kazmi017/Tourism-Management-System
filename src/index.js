
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// redux

import {Provider} from "react-redux";
import {store,persistor} from "./store/store"
import { PersistGate } from 'redux-persist/integration/react'

// core styles
import "./scss/volt.scss";

// vendor styles
import "react-datetime/css/react-datetime.css";

import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <ScrollToTop />
            <HomePage />
        </HashRouter>
        </PersistGate>
    </Provider>,
  document.getElementById("root")
);
