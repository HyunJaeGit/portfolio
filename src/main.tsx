import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/App";
import "./styles/variables.css";
import "./styles/theme.css";
import "./styles/globals.css";
import "./styles/layout.css";
import "./styles/components.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
