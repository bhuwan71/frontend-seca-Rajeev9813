import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import { MantineProvider } from "@mantine/core";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
    ,
  </React.StrictMode>
);
