import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

// redux
import { Provider } from 'react-redux';
import configureStore from "./reducers/configureStore";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// alertify css
import "alertifyjs/build/css/alertify.min.css";


const store = configureStore();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
