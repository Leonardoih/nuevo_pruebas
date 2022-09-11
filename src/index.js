import "./styles.css";
import React from "react";
import App from "./app";
import * as ReacDom from "react-dom/client";

const root = ReacDom.createRoot(document.getElementById("app"));
root.render(<App />);
