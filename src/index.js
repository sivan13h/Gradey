import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { GradesProvider } from "./context/GradesContext";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <GradesProvider>
        <App />
      </GradesProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
