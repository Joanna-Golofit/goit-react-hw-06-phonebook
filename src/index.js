import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import contactReducer from "./features/contact"; // to nasz contactSlice.reducer lub contactSlice


const store = configureStore({
  reducer: {
    contact: contactReducer,
    // theme: themeReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
